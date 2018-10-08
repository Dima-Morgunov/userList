import axios from 'axios'

const getData = data =>({
    type: 'GET_DATA',
    payload: data
})

export const getNewData= () => dispatch =>
    axios.get('http://jsonplaceholder.typicode.com/users')
        .then(result => dispatch(getData(result.data)))

/*export function setYear(year) {
    return{
        type: 'SET_YEAR',
        payload: year
    }
}*/