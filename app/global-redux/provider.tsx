'use client'

import {Provider} from 'react-redux'
import {store} from './store'

import {ProviderProps} from "@/app/types/redux-types/ProviderTypes";

export function Providers({children}: ProviderProps) {
  return <Provider store={store}>{children}</Provider>
}
