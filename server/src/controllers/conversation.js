const Conversation = require("../models/Conversation");
const asyncWrapper = require("../utils/asyncWrapper");
const mongoose = require("mongoose");

const create = asyncWrapper(async (req, res) => {
  const newConversation = await Conversation.create(req.body);
  return res.status(200).json(newConversation);
});
const get = asyncWrapper(async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const conversation = await Conversation.findById(id);
  return res.status(200).json({
    success: true,
    data: conversation,
  });
});

module.exports = {
  get,
  create,
};
