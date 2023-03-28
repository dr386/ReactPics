import axios from "axios";
import { CLIENT_ID } from "./credential/Credentials";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;