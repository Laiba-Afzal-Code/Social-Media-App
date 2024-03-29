const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 5,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    desc:{
      type:String,
      min: 50,
    },
    city:{
      type:String,
      min: 50,
    },
    from:{
      type:String,
      min: 50,
    },
    relationship:{
      type:Number,
      enum: [1, 2, 3],
    },
    education:{
      type:String,
      min: 80,
    },
    job:{
      type:Number,
      enum: [1, 2, 3],
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
