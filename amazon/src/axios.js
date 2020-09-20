import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-92dfb.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-92dfb/us-central1/api", //THE API (cloud function URL)
});

export default instance;
