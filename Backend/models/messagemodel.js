import moongoose from "mongoose";

const messageshema = new moongoose.Schema(
  {
    senderid: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reciverid: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = moongoose.model("Message", messageshema);

export default Message;
