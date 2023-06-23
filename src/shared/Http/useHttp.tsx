import axios from "axios";

export const useHttp = () => {

    const http = axios.create({
        baseURL: "http://localhost:3030",
        timeout: 1000,
        headers: { "X-Custom-Header": "foobar" },
    });

    return http;
};
