import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://diploma-ipy5.onrender.com/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Order", "Orders"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: ({ page, limit }) => `/order?page=${page}&limit=${limit}`,
      providesTags: ["Orders"],
    }),
    getById: builder.query({
      query: (orderId) => `/order/${orderId}`,
      providesTags: ["Order"],
    }),
    delete: builder.mutation({
      query: (orderId) => ({
        url: `/order/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order", "Orders"],
    }),
    create: builder.mutation({
      query: (data) => ({
        url: `/order`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Orders"],
    }),
    update: builder.mutation({
      query: ({ orderId, data }) => ({
        url: `/order/${orderId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Orders", "Order"],
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetByIdQuery,
  useDeleteMutation,
  useCreateMutation,
  useUpdateMutation,
} = ordersApi;
