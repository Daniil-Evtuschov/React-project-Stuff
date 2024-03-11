import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../store";

export const useTypeSelector:TypedUseSelectorHook<rootState> = useSelector