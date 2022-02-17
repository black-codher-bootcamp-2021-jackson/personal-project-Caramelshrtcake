const mongoose = require("mongoose");
const User = mongoose.model("users");

const userRoutes = (app) => {
  
  app.post(`/api/userLogin`,async (req, res) => {
    console.log(req.body);
    // find.one returns a query object,(query selector) function finds the details of the user below example of email .exec()means execute
//    let user= await User.exists({ emailAddress: (req.body.identifier) });
// console.log(user);
// when we use function .exists that automatically does the query part and also finds the details
// allowed to set up as empty variable
// if it is a string without a @ convert to membershipnumber---correct bug///////////******* */
let user
if(req.body.identifier.includes("@")){
 user= await User.findOne({ emailAddress: (req.body.identifier) }).exec();
}
else{
    user= await User.findOne({ membershipNumber: (req.body.identifier) }).exec();
}
let message 
let signedIn= false
// 2 equal signs checks something one equal sign assigns things
if (user && user.password == req.body.password){ signedIn = true

message=`login ${user.firstname} successful`
}
else if(user){
message="Incorrect password, please try again or click forgotten password"
}
else {
    message="user not found, please create account"


};

// turnery, thing on left true on the right false
return res.status(200).send({Message: message, user: signedIn ? user: null, signedIn: signedIn})
// dont wrap variable in string ""
   


// const profile = await Profile.create(req.body);

    // return res.status(201).send({
    //   error: false,
    //   profile,
    // });
  });
}

module.exports = userRoutes;
