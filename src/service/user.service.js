import axios from "axios"

const usernameGet = localStorage.getItem('username')

export const getUsers = (callback) => {
    try {
        axios.get('http://localhost:4004/api-v1/users/admin', {
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
        axios.get(` http://localhost:4004/api-v1/users/admin/${username}`, {
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

export const updateUsers = (username, data, callback) => {
    try {
        axios.put(`http://localhost:4004/api-v1/users/admin/${username}`, data, {
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
        axios.delete(`http://localhost:4004/api-v1/users/admin/${username}`, {
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