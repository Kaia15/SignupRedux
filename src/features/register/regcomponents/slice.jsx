import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: 'tran',
  age: '19',
}

export const nameSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
        state.firstName = action.payload
    },
    setAge: (state, action) => {
        state.age = action.payload
    }
  },
})

const {reducer, actions} = nameSlice;

export const {setName, setAge} = nameSlice.actions
export const firstName = (state) => state.user.firstName;
export const age = (state) => state.user.age;
export default reducer