import { combineReducers } from 'redux'
import {dataReducers} from "./data";

export const rootReducer = combineReducers({
    data: {dataReducers}
})