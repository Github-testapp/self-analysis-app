// 質問タイプの定義
export type QuestionType = 'multiple' | 'scale' | 'text' | 'image';

// 質問オプションの定義
export interface QuestionOption {
  id: string;
  text: string;
  value: number;
}

// 質問の定義
export interface Question {
  id: string;
  type: QuestionType;
  content: string;
  options?: QuestionOption[];
  weight: number;
  category: string;
}

// 回答の定義
export interface Answer {
  questionId: string;
  value: string | number;
  timestamp: number;
}

// テスト結果のカテゴリースコア
export interface CategoryScore {
  category: string;
  score: number;
  interpretation: string;
}

// テスト結果の定義
export interface TestResult {
  id: string;
  userId: string;
  date: string;
  categories: {
    flexibility: number;
    awareness: number;
    thinking: number;
  };
  scores: CategoryScore[];
  totalScore: number;
  recommendations: string[];
}

// ユーザープロファイル
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  preferences: UserPreferences;
}

// ユーザー設定
export interface UserPreferences {
  notifications: boolean;
  theme: 'light' | 'dark';
  language: 'ja' | 'en';
}

// UIの状態定義
export interface UIState {
  isLoading: boolean;
  currentTab: string;
  sidebarOpen: boolean;
  toast: ToastMessage | null;
}

// トースト通知の定義
export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

// モーダルの定義
export interface Modal {
  id: string;
  type: string;
  props?: Record<string, any>;
}

// テストセッションの状態
export interface TestSession {
  id: string;
  userId: string;
  startTime: Date;
  currentQuestionIndex: number;
  answers: Answer[];
  isComplete: boolean;
}

// 分析結果の定義
export interface AnalysisResult {
  userId: string;
  timestamp: Date;
  scores: {
    category: string;
    score: number;
    interpretation: string;
  }[];
  recommendations: string[];
}

// テストカテゴリーの定義
export interface TestCategory {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  estimatedTime: number;
}

// エラー状態の定義
export interface ErrorState {
  code: string;
  message: string;
  details?: string;
}

// APIレスポンスの基本形
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ErrorState;
}

// ページネーションの定義
export interface PaginationParams {
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}

// フィルター条件の定義
export interface FilterParams {
  category?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  searchTerm?: string;
}

// ソート条件の定義
export interface SortParams {
  field: string;
  order: 'asc' | 'desc';
}

// チャートデータの定義
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
  }[];
}

// 進捗状態の定義
export interface Progress {
  current: number;
  total: number;
  percentage: number;
}

// 通知設定の定義
export interface NotificationSettings {
  email: boolean;
  push: boolean;
  frequency: 'daily' | 'weekly' | 'monthly' | 'never';
  types: {
    testReminders: boolean;
    resultsSummary: boolean;
    newFeatures: boolean;
  };
}

// アクセス権限の定義
export interface Permissions {
  canEdit: boolean;
  canDelete: boolean;
  canShare: boolean;
  isAdmin: boolean;
}

// Redux Action型の定義
export interface Action<T = any> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
}