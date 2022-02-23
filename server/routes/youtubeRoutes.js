const mongoose = require("mongoose");
const Youtube = mongoose.model("demonstration");

const youtubeRoutes = (app) => {
// use underscores when we don't need a parms but we don't care what is as its non relvs
    app.get(`/api/demonstrations`,async (_, res) => {
       const demonstrations = await Youtube.find()


// find.one returns a query object,(query selector) function finds the details of the user below example of email .exec()means execute
// when we use function .exists that automatically does the query part and also finds the details
// allowed to set up as empty variable

return res.status(200).send(demonstrations)
    })}
module.exports = youtubeRoutes;