const User = require("../models/User");
const asyncWrapper = require("../utils/asyncWrapper");
const mongoose = require("mongoose");

const create = asyncWrapper(async (req, res) => {
  const newUser = await User.create(req.body);
  return res.status(200).json(newUser);
});
const get = asyncWrapper(async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const user = await User.findById(id);
  return res.status(200).json({
    success: true,
    data: user,
  });
});
const update = asyncWrapper(async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const updatedUser = await User.findByIdAndUpdate(id, {
    ...req.body,
  });
  return res.status(200).json({
    success: true,
    data: updatedUser,
  });
});

module.exports = {
  get,
  update,
  create,
};
