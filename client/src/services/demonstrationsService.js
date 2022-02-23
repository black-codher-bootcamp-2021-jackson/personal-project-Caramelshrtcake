import axios from "axios";

const getDemonstrations = async () => {
    // first argument is where we want to get
  const response = await axios.get(`/api/demonstrations`);
  

  return response.data || {};
}
// All of the endpoints in this file can be exported below
export { getDemonstrations};