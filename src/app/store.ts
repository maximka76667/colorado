import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import colorReducer from '../features/color/colorSlice';

export const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
