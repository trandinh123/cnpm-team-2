const User = require("../models/User");
const asyncWrapper = require("../utils/asyncWrapper");
const mongoose = require("mongoose");
const pickFields = require("../utils/pickFields");

const create = asyncWrapper(async (req, res) => {
  const newUser = await User.create(req.body);
  return res.status(200).json(newUser);
});
const get = asyncWrapper(async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate("friends", "name _id")
    .populate("friendRequestReceived", "name _id picture")
    .populate("friendRequestSent", "name _id picture");
  return res.status(200).json({
    success: true,
    data: user,
  });
});
const update = asyncWrapper(async (req, res) => {
  const updateInfo = pickFields(req.body, ["name", "gender", "birthday"]);
  const updatedUser = await User.findByIdAndUpdate(req.user._id, {
    ...updateInfo,
  });
  return res.status(200).json({
    success: true,
    data: updatedUser,
  });
});

const addFriend = asyncWrapper(async (req, res) => {
  const { _id: friendId } = await User.findOne({
    email: req.params.email,
  });
  await Promise.all([
    User.findOneAndUpdate(friendId, {
      $addToSet: { friendRequestReceived: req.user._id },
    }),
    User.findByIdAndUpdate(req.user._id, {
      $addToSet: { friendRequestSent: friendId },
    }),
  ]);
  return res.json({
    success: true,
  });
});

const acceptFriend = asyncWrapper(async (req, res) => {
  const friendId = mongoose.Types.ObjectId(req.params.friendId);
  await Promise.all([
    User.findByIdAndUpdate(friendId, {
      $addToSet: { friends: req.user._id },
    }),
    User.findByIdAndUpdate(req.user._id, {
      $addToSet: { friends: friendId },
    }),
    User.findByIdAndUpdate(friendId, {
      $pull: { friendRequestSent: req.user._id },
    }),
    User.findByIdAndUpdate(req.user._id, {
      $pull: { friendRequestReceived: friendId },
    }),
  ]);
  return res.json({
    success: true,
  });
});

const unfriend = asyncWrapper(async (req, res) => {
  const friendId = mongoose.Types.ObjectId(req.params.friendId);
  await Promise.all([
    User.findByIdAndUpdate(friendId, {
      $pull: { friends: req.user._id },
    }),
    User.findByIdAndUpdate(req.user._id, {
      $pull: { friends: friendId },
    }),
  ]);
  return res.json({
    success: true,
  });
});

const removeFriendRequest = asyncWrapper(async (req, res) => {
  const friendId = mongoose.Types.ObjectId(req.params.friendId);
  await Promise.all([
    User.findByIdAndUpdate(friendId, {
      $pull: { friendRequestReceived: req.user._id },
    }),
    User.findByIdAndUpdate(req.user._id, {
      $pull: { friendRequestSent: friendId },
    }),
  ]);
  return res.json({
    success: true,
  });
});

const declineFriendRequest = asyncWrapper(async (req, res) => {
  const friendId = mongoose.Types.ObjectId(req.params.friendId);
  await Promise.all([
    User.findByIdAndUpdate(friendId, {
      $pull: { friendRequestSent: req.user._id },
    }),
    User.findByIdAndUpdate(req.user._id, {
      $pull: { friendRequestReceived: friendId },
    }),
  ]);
  return res.json({
    success: true,
  });
});

module.exports = {
  get,
  update,
  create,
  addFriend,
  acceptFriend,
  unfriend,
  declineFriendRequest,
  removeFriendRequest,
};
