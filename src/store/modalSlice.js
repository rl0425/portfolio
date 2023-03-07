import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState:{
        open: false,
        kind: null
    },
    reducers: {
        changeState(state,action){
            state.open = action.payload.open
            state.kind = action.payload.kind
        }
    }
})

export const modalActions = modalSlice.actions;
export default modalSlice
