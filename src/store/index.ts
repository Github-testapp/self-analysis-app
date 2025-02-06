import { configureStore } from '@reduxjs/toolkit';
import testReducer from './slices/testSlice';
import userReducer from './slices/userSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    test: testReducer,
    user: userReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// 型定義をここに追加
export {}; // 空のエクスポート文を追加してモジュールとして認識させる