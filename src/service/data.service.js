import axios from "axios"

const username = localStorage.getItem('username')

export const getAlternatifData = (callback) => {
    axios.get('http://localhost:4004/api-v1/kopi/alternatif/', {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err);

        })
}

export const singleAlternatifData = (id_alternatif, callback) => {
    axios.get(`http://localhost:4004/api-v1/kopi/alternatif/${id_alternatif}`, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    }).then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.error(err)
    })
}

export const updateData = (id_alternatif, data, callback) => {
    axios.put(`http://localhost:4004/api-v1/kopi/alternatif/${id_alternatif}`, data, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            if (res.data.statusCode === 200) {
                return callback(true, res.data)
            } else {
                return callback(false, res.data)
            }
        })
        .catch((err) => {
            console.error(err);
        })
}

export const addAlternatifData = (data, callback) => {
    axios.post('http://localhost:4004/api-v1/kopi/alternatif', data, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err);

        })
}

export const deleteDataAlternatif = (id_alternatif, callback) => {
    axios.delete(`http://localhost:4004/api-v1/kopi/alternatif/${id_alternatif}`, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            if (res.data.statusCode === 200) {
                callback(true, res.data)
            } else {
                callback(false, res.data)
            }
        })
        .catch((err) => {
            console.error(err)
        }
        )
}

export const deleteAlternatif = (id_alternatif, callback) => {
    axios.delete(`http://localhost:4004/api-v1/kopi/alternatif/${id_alternatif}`, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    }).then((res) => {
        if (res.data.statusCode === 200) {
            callback(true, res.data)
        } else {
            callback(false, res.data)
        }
    })
        .catch((err) => {
            console.error(err);
        })
}

export const getDataKriteria = (callback) => {
    axios.get('http://localhost:4004/api-v1/kopi/kriteria', {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err);

        })
}

export const createDataKriteria = (data, callback) => {
    axios.post('http://localhost:4004/api-v1/kopi/kriteria', data, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            console.log(res)
            if (res.data.statusCode === 200) {
                return callback(true, res)
            } else {
                return callback(false, res)
            }
        })
        .catch((err) => {
            console.error(err);
        })
}

export const getKriteriaById = (id_kriteria, callback) => {
    axios.get(`http://localhost:4004/api-v1/kopi/kriteria/${id_kriteria}`, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err);

        })
}

export const updateDataKriteria = (id_kriteria, data, callback) => {
    axios.put(`http://localhost:4004/api-v1/kopi/kriteria/${id_kriteria}`, data, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            if (res.data.statusCode === 200) {
                return callback(true, res.data)
            }
            else {
                return callback(false, res.data)
            }
        })
        .catch((err) => {
            console.error(err)
        })
}

export const deleteDataKriteria = (id_kriteria, callback) => {
    axios.delete(`http://localhost:4004/api-v1/kopi/kriteria/${id_kriteria}`, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    }).then((res) => {
        if (res.data.statusCode === 200) {
            callback(true, res.data)
        } else {
            callback(false, res.data)
        }
    }).catch((err) => {
        console.error(err);
    })
}

export const getPenilaianData = (callback) => {
    axios.get('http://localhost:4004/api-v1/kopi/nilai-alternatif', {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.error(error);
        })
}

export const bulkCreatePenilaianData = (data, callback) => {
    axios.post('http://localhost:4004/api-v1/kopi/bulk-nilai-alternatif', data, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    }).then((res) => {
        if (res.data.statusCode === 200) {
            callback(true, res.data)
        } else {
            callback(false, res.data)
        }
    })
        .catch((error) => {
            console.error(error);

        })
}

export const updatePenilaian = (data, id_nilai_alternatif, callback) => {
    axios.put(`http://localhost:4004/api-v1/kopi/nilai-alternatif/${id_nilai_alternatif}`, data, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            if (res.data.statusCode === 200) {
                callback(true, res.data)
            } else {
                console.error(false, res.data)
            }
        })
        .catch((error) => {
            console.error(error);
        })
}

export const singleDataPenilaian = (id_nilai_alternatif, callback) => {
    axios.get(`http://localhost:4004/api-v1/kopi/nilai-alternatif/${id_nilai_alternatif}`, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
}


export const deletePenilaianById = (id_nilai_alternatif, callback) => {
    axios.delete(`http://localhost:4004/api-v1/kopi/nilai-alternatif/${id_nilai_alternatif}`, {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            if (res.data.statusCode === 200) {
                callback(true, res.data)
            } else {
                callback(false, res.data)
            }
        })
        .catch((error) => {
            console.error(error)
        })
}

export const getPerhitunganData = (callback) => {
    axios.get('http://localhost:4004/api-v1/kopi/proses-perhitungan', {
        headers: {
            "Content-Type": "application/json",
            "secret_key": "$awdaAdsnajsJybwauydnajsK131uhbakuO0dt",
            "username": username
        }
    })
        .then((res) => {
            callback(res)
        }).catch((err) => {
            console.error(err)
        })
}