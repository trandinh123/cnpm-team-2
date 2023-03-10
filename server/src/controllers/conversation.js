const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const asyncWrapper = require("../utils/asyncWrapper");
const mongoose = require("mongoose");

const create = asyncWrapper(async (req, res) => {
  const newConversation = await Conversation.create(req.body);
  return res.status(200).json(newConversation);
});
const get = asyncWrapper(async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const conversation = await Conversation.findById(id).populate(
    "users",
    "name picture _id"
  );
  return res.status(200).json({
    success: true,
    data: conversation,
  });
});

const update = asyncWrapper(async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const conversation = await Conversation.findByIdAndUpdate(id, req.body);
  return res.status(200).json({
    success: true,
    data: conversation,
  });
});

const getPrivateConversation = asyncWrapper(async (req, res) => {
  const friendId = mongoose.Types.ObjectId(req.params.friendId);
  const conversation = await Conversation.findOne({
    isGroupChat: false,
    users: { $all: [req.user._id, friendId] },
  }).populate("users", "name picture");
  if (!conversation) {
    const newConversation = await Conversation.create({
      isGroupChat: false,
      users: [req.user._id, friendId],
    });
    return res.status(200).json({
      success: true,
      data: newConversation,
    });
  }
  return res.status(200).json({
    success: true,
    data: conversation,
  });
});

const createGroupConversation = asyncWrapper(async (req, res) => {
  const newConversation = await Conversation.create(req.body);
  return res.status(200).json(newConversation);
});

const getAllGroupConversation = asyncWrapper(async (req, res) => {
  const conversations = await Conversation.find({
    isGroupChat: true,
    users: req.user._id,
  }).populate("users", "name picture");
  return res.status(200).json({
    success: true,
    data: conversations,
  });
});

module.exports = {
  get,
  create,
  update,
  getPrivateConversation,
  createGroupConversation,
  getAllGroupConversation,
};
