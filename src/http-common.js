import axios from "axios";

export default axios.create({
  baseURL: "https://backend-yuy6unuyba-uw.a.run.app/api/",
  headers: {
    "Content-type": "application/json",
  },
})