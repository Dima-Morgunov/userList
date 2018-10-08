
const initialState = {
    data:''
}

export default function dataReducers( state = initialState, action) {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, data: action.payload}
        default:
            return state
    }
}