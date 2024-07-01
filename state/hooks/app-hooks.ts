import { useDispatch } from "react-redux";
import { ThunkAppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<ThunkAppDispatch>()