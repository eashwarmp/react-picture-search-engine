import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: "Client-ID fIkrg0NKseDK3vXCo-bdpD4hXbJaMUFATUvxFk7mA7Q",
      },
});


