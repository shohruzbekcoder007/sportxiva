import axios from '../../utils/baseUrl'

export const getSayil = (url, successfulFunction, errorFunction) => {
    axios.get(url).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}