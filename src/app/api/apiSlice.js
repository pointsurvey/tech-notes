import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ejemplo1-pointsurvey.onrender.com' }),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})