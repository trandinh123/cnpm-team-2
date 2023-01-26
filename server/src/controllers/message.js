const Message = require("../models/Message");
const asyncWrapper = require("../utils/asyncWrapper");
const mongoose = require("mongoose");

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

const getByConversationId = asyncWrapper(async (req, res) => {
  const conversationId = mongoose.Types.ObjectId(req.query.conversationId);
  const messages = await Message.find({
    conversation: conversationId,
  })
    .populate("sender")
    .populate("conversation");
  return res.status(200).json({
    success: true,
    data: messages,
  });
});

module.exports = {
  get,
  create,
  getByConversationId,
};
