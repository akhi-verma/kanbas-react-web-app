import userReducer from './Users/reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        userReducer,
    },
});

export default store;