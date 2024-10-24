import { configureStore } from "@reduxjs/toolkit"; //without default export
import { appReducer } from "./reducer/reducer"; // without default export
import logger from "redux-logger";

export const appStore = configureStore({
    reducer: {appReducer:appReducer },
    middleware: () =>{
        return [logger]      
    }
})