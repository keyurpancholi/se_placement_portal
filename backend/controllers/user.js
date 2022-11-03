// User related logic
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Job = require("../models/job");
const User = require("../models/user");
const user = require("../models/user");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("No user found");
        error.statusCode = 404;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: email,
          password: loadedUser.password,
          userId: loadedUser._id.toString(),
        },
        "seplacementportal",
        { expiresIn: "1h" }
      );
      res
        .status(200)
        .json({
          token: token,
          userId: loadedUser._id.toString(),
          message: "User logged in succesfully",
        });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
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
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const cgpa = req.body.cgpa;
  const branch = req.body.branch;
  const jobs = [];

  bcrypt
    .hash(password, 12)
    .then((hashedpw) => {
      const user = new User({
        username: username,
        email: email,
        password: hashedpw,
        cgpa: cgpa,
        branch: branch,
        jobs: jobs,
      });
      return user.save();
    })
    .then((result) => {
      res
        .status(201)
        .json({ user: result, message: "User created successfully" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.viewJobs = (req, res, next) => {
  Job.find()
    .then((posts) => {
      if (!posts) {
        const error = new Error("No posts found");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ posts: posts, message: "Posts found" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.applyForJob = (req, res, next) => {
  const jobId = req.params.jobId;
  const userId = req.userId;
  const email = req.email

  // user
  //   .updateOne(
  //     { _id: ObjectId(userId) },
  //     // { $push: { jobs: { jobId: mongoose.Types.ObjectId(jobId) } } }
  //   )
  //   .then((user) => {
  //     return user.save()
  //   }).then(result => {+
  //     res.status(200).json({ message: "Applied for job successfully", user: result });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
    user
    .findOne(
      { _id: userId },
      // { $push: { jobs: { jobId: mongoose.Types.ObjectId(jobId) } } }
    )
    .then((user) => {
      if (!user) {
        const error = new Error("No user found");
        error.statusCode = 404;
        throw error;
      }
      user.jobs.push(jobId)
      return user.save()
    }).then(result => {+
      res.status(200).json({ message: "Applied for job successfully", user: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.viewSingleJob = (req, res, next) => {
  const jobId = req.params.jobId;

  Job.findOne({ _id: ObjectId(jobId) })
    .then((job) => {
      if(!job){
        const error = new Error("No job found")
        error.statusCode = 404
        throw error
      }
      res.status(200).json({message: "Job fetched successfully", job: job})
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
