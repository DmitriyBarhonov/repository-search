import { Action, ThunkDispatch, combineReducers, configureStore } from "@reduxjs/toolkit";
import { resporsReducer } from "./app-reducer/repos-reducer";

const rootReducer = combineReducers({
  repo: resporsReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type AppStateType = ReturnType<typeof rootReducer>
export type ThunkAppDispatch = ThunkDispatch<AppStateType, void, Action>
export type ErrorType = { messages: Array<{ message: string, code?: number }>}
export type ThunkError = { rejectValue: ErrorType | null }
// НУЖЕН ЗАПРОС НА ПОСИК РЕПОЗИТОРИЕМ
// запрос за конкретной репой
