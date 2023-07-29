import axios from '../../utils/baseUrl'

export const countCommet = (url, data, successfulFunction, errorFunction) => {
    axios.post(url, data).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const getMap = (url,  successfulFunction, errorFunction) => {
    axios.get(url).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}