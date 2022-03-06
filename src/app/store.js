import { configureStore } from "@reduxjs/toolkit"
import photoReducer from "features/Photo/photoSlice"
import userReduccer from "./userSlice"

const rootReducer = {
    photos: photoReducer,
    user: userReduccer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store