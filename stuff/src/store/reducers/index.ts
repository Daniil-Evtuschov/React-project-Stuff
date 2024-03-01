import { combineReducers } from '@reduxjs/toolkit';
import { InitialStateInt } from '../../interfaces';
import apiReducer from './apiReducer';


export const rootReducer = combineReducers({
    Api: apiReducer
})

export type rootState = ReturnType<typeof rootReducer>