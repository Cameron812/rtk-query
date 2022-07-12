import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Define single API slice object
export const apiSlice = createApi({
  //The cache reducer expects to be added at 'slice.api'(default name is 'api'.)
  reducerPath: "api",
  //All of requests will have Urls starting with '/fakeApi'.
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  //The endpoints represent operations and requests for this server
  endpoints: (builder) => ({
    //The 'getPosts' endpoint is a "query" operation that returns data
    getPosts: builder.query({
      //The url for this request is '/fakeApi/posts'
      query: () => "/posts"
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: initialPost
      })
    })
  })
});
//Export the auto-generated hook for the 'getPosts' query endpoint
export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation
} = apiSlice;
