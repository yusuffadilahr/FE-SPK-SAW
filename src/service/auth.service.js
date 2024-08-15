import axios from "axios"

export const Login = (data, callback) => {
    axios.post('http://localhost:4004/api-v1/users/login', data, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        callback(true, res.data)
    }).catch((error) => {
        callback(false, error)
    })
}

export const Register = (data, callback) => {
    axios.post('http://localhost:4004/api-v1/users/register', data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            if (res.data.statusCode === 200) {
                return callback(true, res.data)
            } else {
                return callback(false, res.data)
            }
        })
        .catch(error => {
            callback(false, error)
            console.error(error)
        })
}

export const Logout = (data, callback) => {
    axios.post('http://localhost:4004/api-v1/users/logout', data, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": "admin123"
        }
    }).then((res) => {
        if (res.data.statusCode === 200) {
            callback(true, res.data)
        } else {
            callback(false, res.data)
        }
    }).catch((error) => {
        console.error(error);

    })
}