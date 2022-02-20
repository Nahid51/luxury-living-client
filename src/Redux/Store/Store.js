import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { servicesApi } from '../Slices/serviceSlice'

export const store = configureStore({
    reducer: {
        [servicesApi.reducerPath]: servicesApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(servicesApi.middleware),
})

setupListeners(store.dispatch)