const mongoose = require("mongoose");

const exampleSchema = mongoose.Schema(
  {
    prop1: {
      type: String,
    },
    prop2: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
