import axios from "axios";

const api = axios.create({
    baseURL: '192.168.163.36:3301'
})

export default api;