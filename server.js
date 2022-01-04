require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router;
const User = require("../models/user");

const app = express();

mongoose.connect(process.env.MONGO_URI)
//mongoose.Promise = global.Promise;
// app.use(express.static("public"));
//app.use("/api", require("./routes/api"));

app.get("/api", (req, res) => {
  res.send("it is working");
});

app.listen(process.env.port || 3000, function () {
  console.log("now listening for requests");
});
router.get("/users", (req, res, next) => {
  User.find({})
    .then(function (users) {
      res.send(students);
    })
    .catch(next);
});

//add new user
router.post("users", (req, res,next) => {
    User.create(req.body)
    .then((User)=>{
        res.send(user)
    })
 .catch (next)
});


//update a user profile
router.put("/users/:id", (req, res, next ) => {
    User.findOneAndUpdate({id:req.params.id})
    .then(function (users){
  res.send(User)
}
)});


//delete a user from db
router.delete("/users/:id", (req, res, next) => {
  User.findOneAndDelete({_id: req.params.id}).then(function(user){
        res.send(user);
})}); 