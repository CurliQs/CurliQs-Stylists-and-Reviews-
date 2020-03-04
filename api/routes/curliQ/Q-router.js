const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("./authenticate-middleware");
const Customers = require("./customer-model");
