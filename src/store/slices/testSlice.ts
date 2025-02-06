import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, Answer } from '../../types';

interface TestState {
  currentQuestion: number;
  questions: Question[];
  answers: Answer[];
  isComplete: boolean;
  results: {
    categories: {
      flexibility: number;
      awareness: number;
      thinking: number;
    };
    timestamp: number;
  } | null;
}

const initialState: TestState = {
  currentQuestion: 0,
  questions: [],
  answers: [],
  isComplete: false,
  results: null,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    addAnswer: (state, action: PayloadAction<Answer>) => {
      state.answers.push(action.payload);
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1;
      } else {
        state.isComplete = true;
      }
    },
    setResults: (state, action: PayloadAction<{
      categories: {
        flexibility: number;
        awareness: number;
        thinking: number;
      };
      timestamp: number;
    }>) => {
      state.results = action.payload;
    },
    resetTest: (state) => {
      state.currentQuestion = 0;
      state.answers = [];
      state.isComplete = false;
      state.results = null;
    },
  },
});

export const { setQuestions, addAnswer, setResults, resetTest } = testSlice.actions;
export default testSlice.reducer;