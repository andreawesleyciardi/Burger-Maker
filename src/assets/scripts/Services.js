export function postSignin(data) {
    return fetch(`${process.env.REACT_APP_APIS_BASE_URL}login`, {
        method: "POST",
        body: JSON.stringify(data)
    })
}

export function getIngredients() {
    return fetch(`${process.env.REACT_APP_APIS_BASE_URL}ingredients`, {
        method: "GET"
    })
}