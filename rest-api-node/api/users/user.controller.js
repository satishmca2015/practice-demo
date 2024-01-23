const user = require("./user.service");

const { genSaltSync, hashSync, genSalt, compareSync } = require("bcrypt");
const pool = require("../../config/database");
const { sign } = require("jsonwebtoken");

function getRevenuePercentage(operatorId, prevArray, currArray) {
  let total = prevArray[operatorId + ""]?.revenue;
  let currentTotal = currArray[operatorId + ""]?.revenue;
  let percentVal = 0;
  let dataObj = {};
  if (total != undefined && currentTotal != undefined) {
    percentVal = (currentTotal / total) * 100;
    dataObj = {
      operatorId: operatorId,
      percentVal: percentVal,
    };
  } else {
    dataObj = {
      operatorId: operatorId,
      percentVal: percentVal,
    };
  }

  return dataObj;
}

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    user.create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status().json({
          success: 0,
          message: "DB connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Record inserted successfully",
        data: results,
      });
    });
  },

  getUserByUserId: (req, res) => {
    const id = req.params.id;
    user.getUserByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return (
          res,
          json({
            success: 0,
            message: "Record not found",
          })
        );
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getUsers: (req, res) => {
    user.getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getOperators: (req, res) => {
    user.getOperators((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  
  getOperatorRevenue: (req, res) => {
    const id = req.query.id;
    // console.log(id + "okk");
    user.getOperatorRevenue(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  
  getOperatorWiseRevenue: async (req, res) => {
    // const id = req.query.id;
    try {
      const results_yesterday = await user.getOperatorTodaysRevenue();
      const results_current = await user.getOperatorCurrentRevenue();
      const results_month = await user.getCurrentRevenueMonth();
      // console.log(results_current);
      const operators = await user.getOperatorForRevenue();
      const yesterdayRevTotal= results_yesterday.reduce((acc,item)=>{
          return acc=acc+item.revenue_inr;
      },0);
      const todayRevTotal = results_current.reduce((acc,item)=>{
        return acc=acc+item.current_revenue;
    },0);

    const monthTotal= results_month.reduce((acc,item)=>{
      return acc=acc+item.revenue_inr;
  },0);

      // console.log('reve : '+yesterdayRevTotal);

      let result_json = [];
      Object.keys(operators).forEach(function(key, index) {
        let operator_id = operators[key].OPERATOR_ID;
        let operator_name = operators[key].OPERATOR;
        const foundObject = results_yesterday.find(item => item['operator_id'] === operator_id);
        const foundObjectCurrent = results_current.find(item => item['operator_id'] === operator_id);
        dataObj = {};
        if (foundObject && foundObjectCurrent ) {
            const yestRevenue = (foundObject.revenue==undefined) ? 0 : foundObject.revenue;
            const netRevenue = (foundObject.net_revenue==undefined) ? 0 : foundObject.net_revenue;
            const revenueInr = (foundObject.revenue_inr==undefined) ? 0 : foundObject.revenue_inr;
            const currentRevenue = (foundObjectCurrent.current_revenue==undefined) ? 0 : foundObjectCurrent.current_revenue;
            dataObj = {
              operatorId: operator_id,
              operatorName: operator_name,
              yesterday: Math.round(yestRevenue),
              today: Math.round(currentRevenue),
              diff: Math.round(currentRevenue-yestRevenue),
              netRevenue: Math.round(netRevenue),
              revenueInr: Math.round(revenueInr)
            };
        } else {
            dataObj = {
              operatorId: operator_id,
              operatorName: operator_name,
              yesterday: 0,
              today: 0,
              diff:0,
              netRevenue:0,
              revenueInr:0
            };
        }
        result_json.push(dataObj);

      });

      return res.json({
        success: 1,
        yesterdayRevTotal : Math.round(yesterdayRevTotal),
        todayRevTotal : Math.round(todayRevTotal),
        monthTotal : Math.round(monthTotal),
        data: result_json,
      });
    } catch (error) {
      console.log(error);
      return;
    }
  },

  getOperatorTodaysRevenue: async (req, res) => {
    try {
      const results_all = await user.getOperatorTodaysRevenue();
      const results_current = await user.getOperatorCurrentRevenue();

      let prev_arr = {};
      for (const result_val of results_all) {
        prev_arr[result_val.operator_id] = { revenue: result_val.revenue };
      }

      let curr_arr = {};
      for (const curr_val of results_current) {
        curr_arr[curr_val.operator_id] = { revenue: curr_val.current_revenue };
      }

      const operators = await user.getOperatorForRevenue();

      let result_json = [];
      for (x = 0; x < operators.length; x++) {
        // console.log(operators[x].OPERATOR_ID,'okk');
        resultObj = getRevenuePercentage(
          operators[x].OPERATOR_ID,
          prev_arr,
          curr_arr
        );
        resultObj.operatorName = operators[x].OPERATOR;
        if (resultObj.percentVal > 100) {
          resultObj.percentVal = 100;
        }
        if (resultObj.percentVal > 0) {
          result_json.push(resultObj);
        }
      }

      return res.json({
        success: 1,
        data: result_json,
      });
    } catch (error) {
      console.log(error);
      return;
    }
  },

  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    user.updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "failed to update user",
        });
      }
      return res.json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },

  deleteUser: (req, res) => {
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "User deleted successfully",
      });
    });
  },

  login: (req, res) => {
    const body = req.body;
    user.getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Invalid email id",
        });
      }
      // console.log(body.password + "=" + results.password);

      // const result = compareSync(body.password, results.password);
      if (body.password == "1234") {
        results.password = undefined;
        /*  const jsonwebtoken = sign({ result: results }, process.env.TOKEN_KEY, {
                    expiresIn: "1h"
                }); */

        return res.json({
          status: true,
          message: "login success",
          // token: jsonwebtoken,
          email: results.email,
        });
      } else {
        return res.json({
          status: false,
          message: "Invalid email or password",
        });
      }
    });
  },
};
