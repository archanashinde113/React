// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const CategoryApi = createApi({
  reducerPath: 'BlogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://logibricks.com/api/' }),
  endpoints: (builder) => ({
    getBlogCategories: builder.query({
      query: (path) => `${path}`,
    }),
  }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlogCategoriesQuery } = CategoryApi