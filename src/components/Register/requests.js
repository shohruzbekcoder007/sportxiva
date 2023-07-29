import axios from '../../utils/baseUrl'

export const setRegister = (url, data, successfulFunction, errorFunction) => {
    axios.post(url, data).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}