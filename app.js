var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
var indexRouter = require("./routes/index");
var programsRouter = require("./routes/programs");
var userRouter = require("./routes/userRouter");
var programdetailRouter = require("./routes/programdetail");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

app.use("/", indexRouter);
app.use("/programs", programsRouter);
app.use("/programs/:id", programdetailRouter);
app.use("/users", userRouter);

module.exports = app;
