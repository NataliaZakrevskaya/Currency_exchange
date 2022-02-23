import { combineReducers, createStore } from "redux";

export const rootReducers = combineReducers({
    currency: currencyReducer
})

export type RootStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

