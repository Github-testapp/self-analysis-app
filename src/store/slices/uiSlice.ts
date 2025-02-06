import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

interface Modal {
  id: string;
  type: string;
  props?: Record<string, any>;
}

interface UIState {
  isLoading: boolean;
  toasts: Toast[];
  activeModal: Modal | null;
  sidebarOpen: boolean;
  currentTab: string;
}

const initialState: UIState = {
  isLoading: false,
  toasts: [],
  activeModal: null,
  sidebarOpen: false,
  currentTab: 'history',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addToast: (state, action: PayloadAction<Omit<Toast, 'id'>>) => {
      const id = Date.now().toString();
      state.toasts.push({ ...action.payload, id });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    },
    setModal: (state, action: PayloadAction<Modal | null>) => {
      state.activeModal = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setCurrentTab: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload;
    },
    clearAllToasts: (state) => {
      state.toasts = [];
    },
  },
});

// アクションクリエーターをエクスポート
export const {
  setLoading,
  addToast,
  removeToast,
  setModal,
  toggleSidebar,
  setCurrentTab,
  clearAllToasts,
} = uiSlice.actions;

// トースト表示のユーティリティ関数
export const showToast = (
  type: Toast['type'],
  message: string
) => (dispatch: any) => {
  dispatch(addToast({ type, message }));
  // 3秒後に自動的にトーストを削除
  setTimeout(() => {
    dispatch(removeToast(Date.now().toString()));
  }, 3000);
};

export default uiSlice.reducer;