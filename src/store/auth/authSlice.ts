import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
  token: string | any;
  isAuthenticated: boolean | any;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated:false
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken(state, { payload }: PayloadAction) {
     if(payload == null ) {
        state.token= payload
      }
    },
    clearToken(state) {
      state.token = null
    },
    setAuthState(state, { payload }: PayloadAction) {
      state.isAuthenticated = payload
    }
  }

})

export const { saveToken, clearToken, setAuthState } = auth.actions
export default auth.reducer;