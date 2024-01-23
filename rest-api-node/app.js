require("dotenv").config();

const express = require("express");
const cors = require('cors');
const app = express();

const userRouter = require("./api/users/user.router");
const operatorRouter = require("./api/users/operator.router");

app.use(express.json());
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use("/api/users", userRouter);
app.use("/api/operator", operatorRouter);

//https://www.getpostman.com/collections/88e07cdd8ef06759841b


/* app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "this is rest api working"
    });
}); */


app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on PORT", process.env.APP_PORT);
});