import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser: (state, action) => {
            state.isLoggedIn = true,
            state.user = action.payload
        },
        removeUser: (state, action) => {
            return null
        }
    }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer