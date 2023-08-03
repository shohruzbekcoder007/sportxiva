import axios from '../../utils/baseUrl'

export const getNews = (url,id, successfulFunction, errorFunction) => {
    axios.get(url+`${id}`).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}