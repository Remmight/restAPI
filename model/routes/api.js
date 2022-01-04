const express = require("express");
const router = express.Router;
const User = require("../models/user");


//get all users from db
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
);


//delete a user from db
router.delete("/users/:id", (req, res, next) => {
  User.findOneAndDelete({_id: req.params.id}).then(function(user){
        res.send(user);
});


module.exports = router
});
});
