import { HEADERS, API_URL } from '../configs/index';
export function generateURL() {
    const length = 10;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function graphql(query: string, variables: any) {
    const options = {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({ query, variables })
    };
    fetch(API_URL, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}