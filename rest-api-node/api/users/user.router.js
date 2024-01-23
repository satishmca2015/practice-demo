const user = require("./user.controller");
const router = require("express").Router();

const { checkToken } = require("../../auth/token_validation");

router.post("/", user.createUser);
router.get("/", user.getUsers);
router.get("/operators", user.getOperators);
// router.get("/revenue:id",  user.getOperatorRevenue);
router.get("/:id", user.getUserByUserId);
router.patch("/", user.updateUser);
router.delete("/", checkToken, user.deleteUser);

router.post("/login", user.login);

module.exports = router;

//AWS
//pass = awsdatabase
