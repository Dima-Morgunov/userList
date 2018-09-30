/*
export const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST'
*/

export function getNewData(data) {
    return dispatch =>{
        dispatch({
            type: 'GET_DATA',
            payload: data
        })
    }
}
/*export function setYear(year) {
    return{
        type: 'SET_YEAR',
        payload: year
    }
}*/