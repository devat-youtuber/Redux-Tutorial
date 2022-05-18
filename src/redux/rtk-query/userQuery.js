import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userQuery = createApi({
  // Similar to the Slice name when creating a regular Slice
  reducerPath: 'users',
  // General configuration for all requests.
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().userState?.token;

      if(token){
        headers.set('Authorization', token)
      }
      
      return headers;
    }
  }),
  // Endpoints (request functions)
  endpoints: (builder) => ({
    getUsers: builder.query({ // use + GetUsers + Query
      query: () => ({
        url: `/users?_sort=createdAt&_order=desc`,
      }),
      // transformResponse: (response, meta, arg) => {
      //   return [...response].reverse();
      // },
      // providesTags: ['Users']
    }),
    createUser: builder.mutation({ // use + CreateUser + Mutation
      query: (newUser) => ({
        url: `/users`,
        method: 'POST',
        body: newUser
      }),
      // transformResponse: (response, meta, arg) => {
      //   return [...response].reverse();
      // }
      // invalidatesTags: ['Users'],
      async onQueryStarted(newUser, { dispatch, queryFulfilled }){
        const res = await queryFulfilled;
        dispatch(
          userQuery.util.updateQueryData('getUsers', undefined, (userData) => {
            return [res.data, ...userData]
          })
        )
      }
    }),
    udapteUser: builder.mutation({ // use + UdapteUser + Mutation
      query: (newUser) => ({
        url: `/users/${newUser.id}`,
        method: 'PUT',
        body: newUser
      }),
      // transformResponse: (response, meta, arg) => {
      //   return [...response].reverse();
      // }
      // invalidatesTags: ['Users'],
      async onQueryStarted(newUser, { dispatch }){
        dispatch(
          userQuery.util.updateQueryData('getUsers', undefined, (userData) => {
            return userData?.map(item => 
              item.id === newUser.id ? newUser : item
            );
          })
        )
      }
    }),
    deleteUser: builder.mutation({ // use + DeleteUser + Mutation
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE'
      }),
      // transformResponse: (response, meta, arg) => {
      //   return [...response].reverse();
      // }
      // invalidatesTags: ['Users'],
      async onQueryStarted(id, { dispatch }){
        dispatch(
          userQuery.util.updateQueryData('getUsers', undefined, (userData) => {
            return userData?.filter(item => item.id !== id)
          })
        )
      }
    }),
  })
})

export const userSelector = userQuery.endpoints.getUsers.select()

export default userQuery;