import axios from "axios";

const getLocations = async () => {
    // first argument is where we want to post the second argument is the req.body
  const response = await axios.get(`/api/locations`);
  

  return response.data || {};
}
// All of the endpoints in this file can be exported below
export {getLocations};