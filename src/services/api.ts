import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// type PurchasePayload = {
//   products: Products[]
//   name: string
//   email: string
//   phone_number: string
//   street_number: number
//   street: string
//   district: string
//   city: string
//   state: string
// }

const userToken = 'AB30AB6C-2CB2-442A-A8C7-ACBB606A0E35'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-candidate.ogruposix.com/',
    prepareHeaders: (headers) => {
      headers.set('user-token', userToken)
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<Products[], void>({
      query: () => 'checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15' // endpoint fornecido para obter dados da página
    }),
    purchase: builder.mutation({
      query: ({ productId, purchaseData }) => ({
        url: `buy/${productId}`, // endpoint fornecido para enviar os dados do produto selecionado
        method: 'POST',
        body: purchaseData
      })
    })
  })
})

export const { useGetProductQuery, usePurchaseMutation } = api
export default api
