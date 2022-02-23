const mongoose = require("mongoose");
const Location = mongoose.model("location");

const LocationsRoutes = (app) => {
  
  app.get(`/api/locations`,async (_, res) => {
const locations= await Location.find()
return res.status(200).send(locations)
})}

module.exports= LocationsRoutes;

