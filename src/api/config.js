import axios from "axios";

const instance = axios.create({
    baseURL: "https://wngs2f-3003.csb.app/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;