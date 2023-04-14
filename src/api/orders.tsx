import axios from "axios";
const API_KEY=import.meta.env.VITE_API_KEY
export default axios.create({
    baseURL:`https://red-candidate-web.azurewebsites.net/swagger/v1/swagger.json&appid=${API_KEY}`,

});

