import axios from 'axios'

export const apiCall = async (url: string, params: string) => {
    const res = await axios(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data: params
    })
}