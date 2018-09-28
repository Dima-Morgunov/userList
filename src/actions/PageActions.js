export const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST'
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS'

export function getPhoto(year) {
    return dispatch =>{
        dispatch({
            type: GET_PHOTO_REQUEST,
            payload: year
        })
        setTimeout(() => {
            dispatch({
                type: GET_PHOTO_SUCCESS,
                payload: [1, 2, 3, 4, 5],
            })
        }, 1000)
    }
}
/*export function setYear(year) {
    return{
        type: 'SET_YEAR',
        payload: year
    }
}*/