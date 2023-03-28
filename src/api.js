import axios from "axios";
import { CLIENT_ID, ACCESS_KEY } from "./credential/Credentials";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`,
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);
  return response;
};

export default searchImages;