import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  selectedPeople: [],
}

const friendSlice = createSlice({
  name: 'friendState',
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResults = action.payload
    },
    addFriends: (state, action) => {
      state.selectedPeople.push(action.payload)
    },
    removeFriends: (state, action) => {
      state.selectedPeople = state.selectedPeople.filter((user) => user.userId !== action.payload)
    },
    removeAll: (state) => {
      state.selectedPeople = []
    }
  }
})

export const { setSearchResult, addFriends, removeFriends, removeAll } = friendSlice.actions

export default friendSlice.reducer
