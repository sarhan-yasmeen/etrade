import axios from "axios";
const http = axios.create({
    baseURL: "http://localhost:3030",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },


});
export const useHttp = () => {



    return http;
};
