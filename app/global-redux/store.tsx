'use client'

import {combineReducers, configureStore} from '@reduxjs/toolkit'
import testReducer from './features/test/testSlice'

const rootReducer = combineReducers({
  test: testReducer,
  // other reducers here
},)

export const store = configureStore({
  reducer: rootReducer
})