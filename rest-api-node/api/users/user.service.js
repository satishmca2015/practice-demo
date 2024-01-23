const dbObj = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    let insertQry =
      "INSERT INTO `registration`(`firstName`, `lastName`, `gender`, `email`, `password`, `number`) VALUES (?,?,?,?,?,?)";
    dbObj.query(
      insertQry,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUsers: (callBack) => {
    dbObj.query(
      "SELECT * FROM `registration` ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getOperators: (callBack) => {
    dbObj.query(
      "SELECT * FROM `tbl_operator_master` ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getOperatorRevenue: (id, callBack) => {
    dbObj.query(
      'SELECT id,tbl_operator_master.OPERATOR AS operator_name,SUM(total_revenue) as revenue, DATE_FORMAT(date,"%Y-%m-%d") AS date, event_id,revenue_app.operator_id FROM sngmpg.revenue_app JOIN tbl_operator_master ON revenue_app.operator_id = tbl_operator_master.OPERATOR_ID WHERE revenue_app.operator_id = ? AND date >= DATE(NOW()) - INTERVAL 7 DAY GROUP BY revenue_app.operator_id,DATE ORDER BY DATE ASC',
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  
  getCurrentRevenueMonth : async () => {
    try {
      const results = await new Promise((resolve, reject) => {

        let dataQuery = `
        SELECT 
        subscription_summary.billed_date,
        (
        (
        (ra.hungama_net_revenue / 100) * SUM(subscription_summary.revenue)
        ) * ra.current_currency
        ) AS revenue_inr 
        FROM
        subscription_summary 
        JOIN tbl_mpg_revenue_ratio_details ra 
        ON ra.operator_id = subscription_summary.operator_id 
        WHERE DATE(subscription_summary.billed_date) >= DATE_FORMAT(CURDATE(), '%Y-%m-01') 
        AND DATE(subscription_summary.billed_date) <= DATE(NOW()) - INTERVAL 1 DAY 
        GROUP BY subscription_summary.billed_date;
        `;


        dbObj.query(
          dataQuery,
          (error, results, fields) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          }
        );
      });
      return results;
    } catch (error) {
      throw error;
    }
  },

  getOperatorTodaysRevenue : async () => {
    try {
      const results = await new Promise((resolve, reject) => {

        let dataQuery = 'SELECT subscription_summary.operator_id ,SUM(subscription_summary.revenue) AS revenue,((ra.hungama_net_revenue / 100)*SUM(subscription_summary.revenue)) AS net_revenue,(((ra.hungama_net_revenue / 100)*SUM(subscription_summary.revenue)) * ra.current_currency) AS revenue_inr FROM  subscription_summary JOIN tbl_mpg_revenue_ratio_details ra ON ra.operator_id = subscription_summary.operator_id WHERE DATE(subscription_summary.billed_date) = DATE(NOW()) - INTERVAL 1 DAY GROUP BY subscription_summary.operator_id';

        dbObj.query(
          dataQuery,
          (error, results, fields) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          }
        );
      });
      return results;
    } catch (error) {
      throw error;
    }
  },

  getOperatorForRevenue: async () => {
    try {
      const results = await new Promise((resolve, reject) => {
        dbObj.query(
          "SELECT * FROM tbl_operator_master",
          (error, results, fields) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          }
        );
      });
      return results;
    } catch (error) {
      throw error;
    }
  },

  getOperatorCurrentRevenue: async () => {
    try {
      const results = await new Promise((resolve, reject) => {
        dbObj.query(
          "select sum(total_revenue) as current_revenue, operator_id from revenue_app where date = CURDATE() group by operator_id",
          (error, results, fields) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          }
        );
      });
      return results;
    } catch (error) {
      throw error;
    }
  },

  getUserByUserId: (id, callBack) => {
    dbObj.query(
      "SELECT * FROM `users` WHERE id = ?",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  updateUser: (data, callBack) => {
    dbObj.query(
      "UPDATE `registration` SET `firstName`=?,`lastName`=?,`gender`=?,`email`=?,`password`=?,`number`=? WHERE id = ?",
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteUser: (data, callBack) => {
    dbObj.query(
      "DELETE FROM `registration` WHERE id = ?",
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUserByUserEmail: (email, callBack) => {
    dbObj.query(
      "SELECT * FROM `users` WHERE email = ?",
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
