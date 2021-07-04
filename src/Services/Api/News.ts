
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = '55d51636f35d4453bc0dc9f10f5e7ac7';
export const newsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getHeadlinesByCountry: builder.query({
      query: (country: string) => `top-headlines?country=${country}&apiKey=${apiKey}`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetHeadlinesByCountryQuery } = newsApi