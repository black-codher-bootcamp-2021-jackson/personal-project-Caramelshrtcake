const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  occupation: [String],
  date: Date,
  membershipNumber: Number,
  emailAddress: String,
  password: String,
  userPrefrences: String,

},
// "firstname": "Andy",
// "lastname": "Pearson",
// "occupation": [
//   "Coder"
// ],
// "dob": {
//   "$date": "1972-01-01T00:00:00Z"
// },
// "membershipNumber": 80201842,
// "emailAddress": "AP@aol.co.uk",
// "password": "blue",
// "userPrefrences": "busy time, extrovert"
);


mongoose.model("users", UserSchema);