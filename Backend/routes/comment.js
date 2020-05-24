const express = require("express");
const commentRoutes = express.Router();

let Comment = require("../models/comment.model");

commentRoutes.route("/addComment").post(function (req, res) {
  let comment = new Comment(req.body);

  comment
    .save()
    .then((comment) => {
      res.status(200).json({
        comment: "you have added comment successfully",
      });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

//get data

commentRoutes.route("/getAllDetails").get(function (req, res) {
  Comment.find(function (err, wish) {
    if (err) console.log(err);
    else res.json(wish);
  });
});

//get details by id

commentRoutes.route("/commentDetails/:id").get(function (req, res) {
  let id = req.params.id;
  Comment.find({ comment_pid: id }, function (err, wish) {
    if (err) console.log(err);
    else res.json(wish);
  });
});

commentRoutes.route("/deleteItem/:pid/:id").delete(function (req, res) {
  let id = req.params.id;
  let pid = req.params.pid;

  Comment.deleteOne({ _id: id, wish_pid: pid }, function (err, wish) {
    if (err) console.log(err);
    else res.json(wish);
  });
});

module.exports = commentRoutes;
