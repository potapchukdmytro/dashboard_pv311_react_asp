import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("at")
        ? `Bearer ${localStorage.getItem("at")}` 
        : '',
    }
})

export default http;