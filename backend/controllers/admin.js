// Admin related logic
// Admin functionalities: Add a new user, add a new job, send notifications

const User = require("../models/user");
const Job = require("../models/job");
const Admin = require("../models/admin");
const bcrpyt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

exports.addUser = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const cgpa = req.body.cgpa;
  const branch = req.body.branch;

  bcrpyt
    .hash(password, 12)
    .then((hpw) => {
      const user = new user({
        username: username,
        email: email,
        password: hpw,
        cgpa: cgpa,
        branch: branch,
      });
      return user.save();
    })
    .then((user) => {
      res
        .status(201)
        .json({ message: "User created successfully", result: user });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.addNewJob = (req, res, next) => {
  const companyName = req.body.companyName;
  const description = req.body.description;
  const designation = req.body.designation;
  const salary = req.body.salary;

  const job = new Job({
    companyName: companyName,
    description: description,
    designation: designation,
    salary: salary,
  });

  job
    .save()
    .then((result) => {
      if (!result) {
        const error = new Error("Failed to create user");
        error.statusCode = 422;
        throw error;
      }
      res
        .status(201)
        .json({ message: "Job created successfully", job: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed!");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const { username, email, password } = req.body;

  bcrpyt
    .hash(password, 12)
    .then((hashedpw) => {
      const admin = new Admin({
        username: username,
        email: email,
        password: hashedpw,
      });
      return admin.save();
    })
    .then((result) => {
      res
        .status(201)
        .json({ message: "Admin created successfully", admin: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  let loadedAdmin;
  Admin.findOne({ email: email })
    .then((admin) => {
      if (!admin) {
        const error = new Error("No admin found");
        error.statusCode = 404;
        throw error;
      }
      loadedAdmin = admin;
      return bcrpyt.compare(password, admin.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedAdmin.email,
          password: loadedAdmin.password,
          userId: loadedAdmin._id,
        },
        "seplacementportal",
        { expiresIn: "1hr" }
      );
      res.status(200).json({ token: token, userId: loadedAdmin._id.toString(), message: "Admin logged in succesfully" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
