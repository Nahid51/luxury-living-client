import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const servicesApi = createApi({
    reducerPath: 'servicesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://frozen-falls-89510.herokuapp.com/'
    }),
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => ({
                url: 'services',
                method: 'GET'
            }),
        }),
        getAllServices: builder.query({
            query: () => ({
                url: 'allservices',
                method: 'GET'
            })
        }),
        getProjects: builder.query({
            query: () => ({
                url: 'projects',
                method: 'GET'
            })
        }),
        getReviews: builder.query({
            query: () => ({
                url: 'reviews',
                method: 'GET'
            })
        }),

    }),
})

export const { useGetServicesQuery, useGetAllServicesQuery, useGetProjectsQuery, useGetReviewsQuery } = servicesApi