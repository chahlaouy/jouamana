import {GET_STRUCTERS, VIEW_STRUCTER, ADD_STRUCTER, DELETE_STRUCTER, UPDATE_STRUCTER} from '../constants/ActionTypes'
const initialState = {
    structers : [],
    structer : {}
}
const structerReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_STRUCTER:
            return {
                ...state,
                structers : [...state.structers,...action.payload]
            }
        case GET_STRUCTERS:
        return {
            ...state,
            structers : action.payload,
            structer : {
                isSingleStructerView : false
            }
        }

        case DELETE_STRUCTER:
            let structers = state.structers.filter(structer =>
                structer._id !== action.payload._id
            )
            return {
                ...state,
                structers : structers
            }

        case UPDATE_STRUCTER:
        return {
            ...state,
            structer : {isSingleStructerView : false},
           refreshList : false
        };

      case VIEW_STRUCTER:
            return {
                ...state,
                structers : action.payload,
                structer : {
                    isSingleStructerView : false
                }
            };
      default:
        return state
    }
}

export default structerReducer;