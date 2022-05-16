const apiCall = async (url: string, method: string, payload: string) => {

  const headers = new Headers()

  headers.append('Content-Type', 'application/json')

  const call = fetch(`http://localhost:80${url}`, {
    method,
    headers,
    body: JSON.stringify({ email: payload })
  }).then(async res => {
    return await res.json()
  })
    .catch(err => console.log(err))
}


export default apiCall