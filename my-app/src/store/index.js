import { createStore , combineReducers} from "redux";
import CounterReducer from "./reducers";

const reducers = combineReducers({

   counter: CounterReducer,

})

const store = createStore(reducers);

export default store;