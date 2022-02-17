import axios from "axios";

const userLogin = async (data) => {
    // first argument is where we want to post the second argument is the req.body
  const response = await axios.post(`/api/userLogin`,data);
  

  return response.data || {};
}
// All of the endpoints in this file can be exported below
export { userLogin};