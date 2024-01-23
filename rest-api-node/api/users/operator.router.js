const user = require("./user.controller");
const router = require("express").Router();

/* 
router.post("/",  user.createUser);
router.get("/",  user.getUsers);
router.get("/:id",  user.getUserByUserId); */
// router.patch("/",  user.updateUser);
// router.delete("/", checkToken, user.deleteUser);

router.get("/revenue",  user.getOperatorRevenue);
router.get("/opwiserevenue",  user.getOperatorWiseRevenue);
router.get("/todaysrevenue",  user.getOperatorTodaysRevenue);


module.exports = router;





//AWS
//pass = awsdatabase