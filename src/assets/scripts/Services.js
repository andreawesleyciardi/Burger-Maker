import axios from 'axios';



const authApi = axios.create({
    baseURL: process.env.REACT_APP_APIS_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
        'Accept': '*/*'
    }
});



export async function postSignin(data) {
    const response = await authApi.post('login', data);
    return response.data;
}

export function getIngredients() {
    return fetch(`${process.env.REACT_APP_APIS_BASE_URL}ingredients`, {
        method: "GET"
    })
}