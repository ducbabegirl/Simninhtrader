import axios from "axios";

const instance = axios.create({
    baseURL: "https://zdlh3q-3003.csb.app/",
    
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;