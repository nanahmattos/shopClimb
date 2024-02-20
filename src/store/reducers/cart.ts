import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Products[]
  isOpen: boolean
  checkIsOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  checkIsOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Products>) => {
      const product = state.items.find(
        (item) => item.product_id === action.payload.product_id
      )
      if (product === undefined) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho.')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
