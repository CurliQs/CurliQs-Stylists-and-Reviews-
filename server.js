const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "front-end/build")));

const curlyQRouter = require("./api/routes/curliQ/Q-router");
const qutterRouter = require("./api/routes/curliQutters/Qutter-router");
const reviewRouter = require('./api/routes/productReview/review-router')


server.use("/curliq", curlyQRouter);
server.use("/qutter", qutterRouter);
server.use("/reviews", reviewRouter);


server.get("/", (req, res) => {
	res.status(200).json({ status: "I'm alive and on fire :fireball:" });
});

// server.get("/reviews", (req, res) => {
// 	res.status(200).json({ status: "I'm alive and on fire..reviewsbb :fireball:" });
// });


server.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/front-end/build/index.html"));
});

module.exports = server;
