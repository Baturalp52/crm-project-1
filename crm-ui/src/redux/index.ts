import { pageReducer } from "./pageReducer";
import { createStore } from "redux";

export const pageRedux = createStore(pageReducer);
