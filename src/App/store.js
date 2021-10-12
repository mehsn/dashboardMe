import {applyMiddleware, combineReducers, createStore} from "redux";
import designReducer from "./Reducer/designReducer";
import {TestMiddleware} from "./Middleware/TestMiddleware";
import componentDisplayReducer from "./Reducer/componentDisplayReducer";

let rootReducer = combineReducers({
        designStore: designReducer,
        componentDisplayStore: componentDisplayReducer
    }
);


let store = createStore(
    rootReducer, {},
    applyMiddleware(
        TestMiddleware
    )//end of applyMiddleware
);

export default store;



