import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { IPost, IUser } from "../models/models";
// import type { Pokemon } from './types'

export const postsApi = createApi({
  reducerPath: "tracksApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getAllPosts: build.query<IPost[], number>({
      query: (limit = 10) => `/posts?${limit && `_limit=${limit}`}`,
    }),
    getPost: build.query<IPost, number>({
      query: (id) => `posts/${id}`,
    }),
    getAllUsers: build.query<IUser[], any>({
      query: () => "/users/",
    }),
  }),
});

export const { useGetAllPostsQuery, useGetAllUsersQuery, useGetPostQuery } = postsApi;
