import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './store/auth/authSlice'
import userReducer from './store/auth/userSlice'
import diariesReducer from './store/diary/diariesSlice'
import entriesReducer from './store/entry/entriesSlice'
import editorReducer from './store/entry/editorSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  diaries: diariesReducer,
  entries: entriesReducer,
  user: userReducer,
  editor:editorReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
