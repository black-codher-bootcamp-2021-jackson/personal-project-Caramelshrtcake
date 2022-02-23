const mongoose = require("mongoose");
const { Schema } = mongoose;

// typing the type of data used in the string
const locationsSchema = new Schema({
  city: String,
  town: String,
});

mongoose.model("location", locationsSchema);