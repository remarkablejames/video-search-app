import React from "react";
import axios from "axios";

const KEY = "AIzaSyBPqJN-DzFpPEHBlWxyXSCMvnOzeG2F_2Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 6,
    key: KEY,
  },
});
