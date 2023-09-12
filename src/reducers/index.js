import ChangeTheNumber from "./updown";
import AddUserData from './AddData'

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    ChangeTheNumber,
    AddUserData
})

export default rootReducer;