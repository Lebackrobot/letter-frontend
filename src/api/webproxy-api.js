// URL do servidor externo
const getHTML = (payload, urlBase = 'http://localhost:5000', endpoint = 'v2/webproxy') => {
    return axios.post(`${urlBase}/${endpoint}`, payload)
        .then(response => {
            return response.data
        })

        .catch(err => {
            console.error('internal server error')
        })
}


const createUrl = (payload, urlBase='http://localhost:5000', endpoint='v2/url') => {
    return axios.post(`${urlBase}/${endpoint}`, payload)
        .then(response => {
            return response.data
        })

        .catch(err => {
            console.error('internal server error')
        })
}


const getURL = (payload, urlBase = 'http://localhost:5000', endpoint = 'v2/url') => {
    return axios.get(`${urlBase}/${endpoint}`)
        .then(response => {
            return response.data
        })

        .catch(err => {
            console.error('internal server error')
        })
}