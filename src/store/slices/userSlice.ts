import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TestHistory {
  id: string;
  date: string;
  score: number;
  category: string;
  results: {
    categoryName: string;
    score: number;
  }[];
}

export interface UserSettings {
  notifications: boolean;
  theme: 'light' | 'dark';
  language: 'ja' | 'en';
}

interface UserState {
  profile: {
    id: string | null;
    name: string | null;
    email: string | null;
    createdAt: string | null;
  };
  settings: UserSettings;
  testHistory: TestHistory[];
  isAuthenticated: boolean;
}

const initialState: UserState = {
  profile: {
    id: null,
    name: null,
    email: null,
    createdAt: null,
  },
  settings: {
    notifications: true,
    theme: 'light',
    language: 'ja',
  },
  testHistory: [],
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<{
      id: string;
      name: string;
      email: string;
      createdAt: string;
    }>) => {
      state.profile = action.payload;
      state.isAuthenticated = true;
    },
    updateSettings: (state, action: PayloadAction<Partial<UserSettings>>) => {
      state.settings = { ...state.settings, ...action.payload };
    },
    addTestHistory: (state, action: PayloadAction<TestHistory>) => {
      state.testHistory.unshift(action.payload);
    },
    clearTestHistory: (state) => {
      state.testHistory = [];
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const {
  setProfile,
  updateSettings,
  addTestHistory,
  clearTestHistory,
  logout,
} = userSlice.actions;

export default userSlice.reducer;