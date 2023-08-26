import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginUserThunk = createAsyncThunk(
    'user/loginUser',
    async (loginData, { dispatch, rejectWithValue }) => {
      const loginURL = 'http://15.165.26.250:8080/users/login'
      try {
        const response = await axios.post(`${loginURL}`, loginData, {
          headers: { "Content-Type": "application/json" }
        })
          console.log(response)
          console.log(response.data)
          sessionStorage.setItem("userIdx", response.data.nickName)
        sessionStorage.setItem("accessToken", response.data.accessToken)
        sessionStorage.setItem("refreshToken", response.data.refreshToken)
        console.log(sessionStorage)
        window.location.href ='/';
      } catch (error) {
        return rejectWithValue(error)
      }
    }
)

export const fetchUserInfoThunk = createAsyncThunk(
    'user/fetchUserInfo',
    // async (userIdx, { rejectWithValue }) => {
    //   const accessToken = sessionStorage.getItem("accessToken")
    //   try {
    //     const response = await axios.get(`${url}/user/${userIdx}/detail`, {
    //       headers: { Authorization: `Bearer ${accessToken}` }
    //     })
    //     return response.data;
    //   } catch (error) {
    //     return rejectWithValue(error)
    //   }
    // }
)

export const logoutUserThunk = createAsyncThunk(
    'user/logoutUser',
    // async (_, { dispatch, rejectWithValue }) => {
    //   const accessToken = sessionStorage.getItem("accessToken")
    //   try {
    //     await axios.post(`${logout}`, _, {
    //       headers: { Authorization: `Bearer ${accessToken}` }
    //     });
    //     sessionStorage.clear();
    //   } catch (error) {
    //     return rejectWithValue(error)
    //   }
    // }
)

export const findPassThunk = createAsyncThunk(
  'user/findPass',
)

const userSlice = createSlice({
  name: 'userState',
  initialState: {
    isLoggedIn: null,
    accessToken: null,
    user: null,
  },
  reducers: {
    login: (state, action) => {
    },
    logout: (state) => {
      sessionStorage.clear()
    },
    setUser: (state, action) => {
      sessionStorage.setItem('userInfo', state.user)
    },
    renewToken: (state, action) => {
      state.accessToken = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginUserThunk.fulfilled, (state, action) => {
          state.isLoggedIn = true
        })
        .addCase(fetchUserInfoThunk.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.user = action.payload;
        })
        .addCase(logoutUserThunk.fulfilled, (state, action) => {
          state.isLoggedIn = false
          window.location.href ='/login'
        })
  }
})

export const {
  login,
  logout,
  setUser,
  renewToken,
} = userSlice.actions

export default userSlice.reducer
