import { configureStore } from '@reduxjs/toolkit'
import { emailApi } from './api'


export const store = configureStore({
    reducer: {
        [emailApi.reducerPath]: emailApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emailApi.middleware)
})