import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const servicesApi = createApi({
    reducerPath: 'servicesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => ({
                url: '/services',
                method: 'GET'
            }),
        }),
        getAllServices: builder.query({
            query: () => ({
                url: '/allservices',
                method: 'GET'
            })
        })
    }),
})

export const { useGetServicesQuery, useGetAllServicesQuery } = servicesApi