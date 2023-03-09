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

export async function getIngredients() {
    const response = await authApi.get('ingredients', { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} });
    return response.data;
    // return fetch(`${process.env.REACT_APP_APIS_BASE_URL}ingredients`, {
    //     method: "GET"
    // })
}