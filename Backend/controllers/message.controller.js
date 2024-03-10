import Conversation from "../models/converstaion.model.js";
import Message from "../models/messagemodel.js";

export const sendmessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: reciverid } = req.params;
    const senderid = req.user._id;

    let conver = await Conversation.findOne({
      participants: { $all: [senderid, reciverid] },
    });

    if (!conver) {
      conver = await Conversation.create({
        participants: [senderid, reciverid],
      });
    }

    const newmesaage = new Message({
      senderid,
      reciverid: reciverid,
      message,
    });

    if (newmesaage) {
      conver.messages.push(newmesaage._id);
    }

    await Promise.all([conver.save(), newmesaage.save()]);

    return res.status(202).json(newmesaage);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getmessage = async (req, res) => {
  try {
    const { id: useridtochat } = req.params;
    const senderid = req.user._id;

    const converstaion = await Conversation.findOne({
      participants: { $all: [senderid, useridtochat] },
    }).populate("messages");

    res.status(200).json(converstaion.messages);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server Errors" });
  }
};
