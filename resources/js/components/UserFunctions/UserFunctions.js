const axios = require('axios')

export const register = newUser = {
     return axios
        .post('api/register', newUser, {
            header: {

            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user = {
     return axios
        .post('api/login', {
            email: user.email,
            password:user.password
        }, {
                headers: {

            }
        })
        .then(res => {
            localStorage.setItem('usertoken',res.data.token)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getUser = () = {
     return axios
        .post('api/profile',{
                headers: {
                Authorization:"something",
            }
        })
        .then(res => {
            // localStorage.setItem('usertoken',res.data.token)
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}
