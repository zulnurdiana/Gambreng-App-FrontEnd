import axios from "axios";

export default axios.create({
    baseURL : "https://gambreng.fajarbuana.my.id",
})

export const axiosPrivate = axios.create({
    baseURL : "https://gambreng.fajarbuana.my.id",
    headers : {'Content-Type' : 'application/json'},
    withCredentials : true,
})