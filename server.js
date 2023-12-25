const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const userRouter = require("./src/routers/user");
const app = express();

app.use(express.json());
app.use(userRouter)
mongoose.connect(process.env.DB_URL).then(() => console.log("SUCCESS DB ✔")).catch((e) => console.log("ERROR DB ❌"),)

app.listen(process.env.PORT, () => console.log(`CONNECTED SERVER ${process.env.PORT} `))