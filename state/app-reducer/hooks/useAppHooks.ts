import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppStateType, ThunkAppDispatch } from "../../store";

export const useAppDispatch = () => useDispatch<ThunkAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector