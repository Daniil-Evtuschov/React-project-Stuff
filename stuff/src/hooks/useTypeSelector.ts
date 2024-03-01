import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../store/reducers";

export const useTypeSelector:TypedUseSelectorHook<rootState> = useSelector