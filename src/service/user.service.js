import axios from "axios"
import { apiUrl } from "./axios.instance"

const usernameGet = localStorage.getItem('username')

export const getUsers = (callback) => {
    try {
        axios.get(apiUrl + '/api-v1/users/admin', {
            headers: {
                "Content-Type": "application/json",
                "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
                "username": usernameGet
            }
        })
            .then((res) => {
                callback(res)
            })
    } catch (error) {
        callback(error)
    }
}

export const getUsernameByUsername = (username, callback) => {
    try {
        axios.get(`apiUrl +  /api-v1/users/admin/${username}`, {
            headers: {
                "Content-Type": "application/json",
                "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
                "username": usernameGet
            }
        })
            .then((res) => {
                callback(res.data)
            })
    } catch (error) {
        console.error(error)
    }
}

export const updateUsers = (username, callback) => {
    try {
        console.log("cek username headers : ", usernameGet);
        console.log("cek username params : ", username);


        axios.put(apiUrl + `/api-v1/users/admin/${username}`, [], {
            headers: {
                "Content-Type": "application/json",
                "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
                "username": usernameGet
            }
        })
            .then((res) => {
                callback(res)
            })
    } catch (error) {
        console.error(error)
    }
}

export const deleteDataUsers = (username, callback) => {
    try {
        axios.delete(apiUrl + `/api-v1/users/admin/${username}`, {
            headers: {
                "Content-Type": "application/json",
                "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
                "username": usernameGet
            }
        })
            .then((res) => {
                callback(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    } catch (error) {
        console.error(error)
    }
}