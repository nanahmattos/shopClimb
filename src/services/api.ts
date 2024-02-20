import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const userToken = 'AB30AB6C-2CB2-442A-A8C7-ACBB606A0E35'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/'
    // prepareHeaders: (headers) => {
    //   headers.set('user-token', userToken)
    //   headers.set('Content-Type', 'application/json')
    //   return headers
    // }
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, void>({
      query: () => 'object' // endpoint fornecido para obter dados da página
    })
    // buyProduct: builder.mutation<any, { productId: string }>({
    //   query: ({ productId }) => ({
    //     url: `buy/${productId}`,
    //     method: 'POST'
    //   })
    // })
  })
})

export const { useGetProductsQuery } = api
export default api
