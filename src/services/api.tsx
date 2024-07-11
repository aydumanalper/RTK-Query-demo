import { createApi, CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Post } from "../models/post.model";

export const postApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    posts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
});
