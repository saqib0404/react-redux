import { createStore } from "redux";
import { counterReducer } from "./services/CounterReducer";

export const store = createStore(counterReducer);