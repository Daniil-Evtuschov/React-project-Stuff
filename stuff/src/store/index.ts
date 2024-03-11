import { combineReducers } from '@reduxjs/toolkit';
import { InitialStateInt } from '../interfaces';
import apiReducer from './reducers/apiReducer';
import singleCardReducer from './reducers/singleCardReducer';

export const rootReducer = combineReducers({
    Api: apiReducer,
    SingleCard: singleCardReducer
})

export type rootState = ReturnType<typeof rootReducer>