const mongoose = require("mongoose");
const urlSchema = new Schema(
  {
    urlCode: {
      type: String,
      require: true,
      unique: true,
      lowerCase: true,
      trim: true,
    },

    longUrl: { type: String, require: true, trim: true },

    shortUrl: { type: String, unique: true },
  },
  { timestemps: true }
);

module.exports = mongoose.model("Url", urlSchema);
