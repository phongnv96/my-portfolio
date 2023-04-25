import mongoose from "mongoose";

const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGODB_URI || "");
mongoose.Promise = global.Promise;

export const db = {
  User: userModel(),
  ContactInfo: ContactInfo(),
};

// mongoose models with schema definitions

function ContactInfo() {
  const schema = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String },
      phone: { type: String },
      message: { type: String, required: true },
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  return mongoose.models.ContactInfo || mongoose.model("ContactInfo", schema);
}

function userModel() {
  const schema = new Schema(
    {
      username: { type: String, unique: true, required: true },
      hash: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.User || mongoose.model("User", schema);
}
