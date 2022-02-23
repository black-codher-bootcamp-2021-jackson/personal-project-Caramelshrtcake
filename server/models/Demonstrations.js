const mongoose = require("mongoose");
const { Schema } = mongoose;

// typing the type of data used in the string
const demonstrationsSchema = new Schema({
  exercise: String,
  uri: String,
});

mongoose.model("demonstration", demonstrationsSchema);