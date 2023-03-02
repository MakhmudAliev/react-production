import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: undefined,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUsername.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.username = action.payload.username;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // .addMatcher(
    //   loginByUsername,
    //   // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
    //   (state, action) => {}
    // )
    // // and provide a default case if no other handlers matched
    // .addDefaultCase((state, action) => {});
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
