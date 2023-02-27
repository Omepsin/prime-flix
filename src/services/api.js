import axios from "axios";

//baseUrl: https://api.themoviedb.org/3
//url: /movie/now_playing?api_key=c67a479bcf24ef8c1dfb3954740e88ed&language=pt-BR&page=1

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
