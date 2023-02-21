const Message = require("../models/Message");
const asyncWrapper = require("../utils/asyncWrapper");
const mongoose = require("mongoose");
const Conversation = require("../models/Conversation");
const User = require("../models/User");

const create = asyncWrapper(async (req, res) => {
  const newMessage = await Message.create(req.body);
  return res.status(200).json(newMessage);
});

const get = asyncWrapper(async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const message = await Message.findById(id);
  return res.status(200).json({
    success: true,
    data: message,
  });
});

const getAllByConversationId = asyncWrapper(async (req, res) => {
  if (req.query.conversationId === "undefined") {
    return res.status(200).json({
      success: false,
      data: [],
    });
  }
  const conversationId = mongoose.Types.ObjectId(req.query.conversationId);
  const messages = await Message.find({
    conversation: conversationId,
  })
    .populate("sender")
    .populate("conversation")
    .sort({ createdAt: "asc" });
  return res.status(200).json({
    success: true,
    data: messages,
  });
});

const getLatestMessage = asyncWrapper(async (req, res) => {
  const conversations = await Conversation.find({
    users: req.user._id,
    latestMessage: {
      $ne: null,
    },
  })
    .populate({
      path: "latestMessage",
      select: "content sender createdAt updatedAt",
      populate: {
        path: "sender",
        model: "User",
      },
    })
    .populate({
      path: "users",
      match: {
        _id: {
          $ne: req.user._id,
        },
      },
      select: "name picture",
    });
  await User.findByIdAndUpdate(req.user._id, {
    lastActiveAt: new Date(),
  });
  return res.json({
    success: true,
    data: conversations,
  });
});
module.exports = {
  get,
  create,
  getAllByConversationId,
  getLatestMessage,
};
