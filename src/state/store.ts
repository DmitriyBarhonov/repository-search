import {
  Action,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { repositoryReducer } from "./repository-reducer/repository-reducer";
import { cardReducer } from "./card-reducer/card-reducer";
import { appReducer } from "./app-reducer";

const rootReducer = combineReducers({
  repository: repositoryReducer,
  cadrRepository: cardReducer,
  app: appReducer
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

// @ts-ignore 
// window.store()
window.store = store.getState;

export type AppStateType = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<AppStateType, void, Action>;
export type ErrorType = { messages: Array<{ message: string; code?: number }> };
export type ThunkError = { rejectValue: ErrorType | null };
