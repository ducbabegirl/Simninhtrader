import axios from "axios";

const instance = axios.create({
    baseURL: "https://8trr77-3003.csb.app/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;