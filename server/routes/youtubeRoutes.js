const mongoose = require("mongoose");
const { default: YoutubeEmbed } = require("../../client/src/Components/YoutubeEmbed");
const Youtube = mongoose.model("Youtube");

const youtubeRoutes = (app) => {

    app.post(`/api/YoutubeUrl`,async (req, res) => {
        console.log(req.body);

// find.one returns a query object,(query selector) function finds the details of the user below example of email .exec()means execute
// when we use function .exists that automatically does the query part and also finds the details
// allowed to set up as empty variable

let YoutubeUrl
if(req.body.("")){
 YoutubeUrl= await User.findOne({ emailAddress: (req.body.identifier) }).exec();
}
else{
    user= await User.findOne({ demonstration: (req.body.demonstration) }).exec();


};

return res.status(200).send({Message: "Thank you for watching.", Data: "YoutubeEmbed"})

module.exports = youtubeRoutes;