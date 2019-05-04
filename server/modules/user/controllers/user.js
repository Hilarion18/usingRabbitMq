const User = require('../models/user');
const response = require('../../../util/response')

exports.getAllUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
};

exports.addUser = async (req, res, next) => {
  const newData = {
    name: req.body.name,
    email: req.body.email,
    picture: req.body.picture
  }
  const user = await User.create(newData)
  if (!user) return response.invalidInput(`Failed to create user data`, res)
  response.success(`User successfully registered`, res, user)
}