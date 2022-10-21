// Admin related logic
// Admin functionalities: Add a new user, add a new job, send notifications

const user = require("../models/user");
const Job = require("../models/job");
const bcrpyt = require('bcryptjs')

exports.addUser = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password
  const cgpa = req.body.cgpa;
  const branch = req.body.branch;

  bcrpyt.hash(password, 12, 'sesuperstring').then(hpw => {
    const user = new user({username: username, email: email, password: hpw, cgpa: cgpa, branch: branch});
    return user.save()
  }).then(user => {res.status(201).json({message: 'User created successfully', result: user})}).catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  })
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
