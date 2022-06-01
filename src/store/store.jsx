import { rootReducer } from "../reducer/AllReducer";
import { createStore } from "redux";

export const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())