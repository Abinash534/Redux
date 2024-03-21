import { legacy_createStore } from "redux";
import { countReducer } from "../reducer/countReducer";

export const store = legacy_createStore(countReducer);
