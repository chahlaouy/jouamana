import { combineReducers } from 'redux'
import members from "./memberReducer";
import structers from "./structerReducer";

const rootReducer = combineReducers({
  members,
  structers
  
})

export default rootReducer
