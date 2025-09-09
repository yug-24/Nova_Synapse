import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  language: string;
  region: string;
  companion: 'elephant' | 'peacock' | 'tiger';
  level: number;
  points: number;
}

interface MoodEntry {
  id: string;
  date: string;
  mood: string;
  intensity: number;
  culturalContext: string;
  notes: string;
}

interface AppState {
  user: UserProfile;
  currentTab: string;
  moodEntries: MoodEntry[];
  vrSessions: any[];
  creativeWorks: any[];
  achievements: any[];
  isLoading: boolean;
  error: string | null;
}

type AppAction = 
  | { type: 'SET_TAB'; payload: string }
  | { type: 'ADD_MOOD_ENTRY'; payload: MoodEntry }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'UPDATE_USER'; payload: Partial<UserProfile> };

const initialState: AppState = {
  user: {
    id: 'user-1',
    name: 'Yug Bhatt',
    avatar: '🧘‍♀️',
    language: 'hindi',
    region: 'maharashtra',
    companion: 'elephant',
    level: 5,
    points: 1250
  },
  currentTab: 'home',
  moodEntries: [
    {
      id: '1',
      date: '2025-01-09',
      mood: 'शांत (Peaceful)',
      intensity: 7,
      culturalContext: 'morning_meditation',
      notes: 'Started day with pranayama'
    },
    {
      id: '2',
      date: '2025-01-08',
      mood: 'उत्साहित (Enthusiastic)',
      intensity: 8,
      culturalContext: 'festival_preparation',
      notes: 'Preparing for Makar Sankranti'
    }
  ],
  vrSessions: [],
  creativeWorks: [],
  achievements: [
    { id: '1', name: 'First Steps', icon: '🦶', description: 'Started your mental wellness journey' },
    { id: '2', name: 'Meditation Master', icon: '🧘', description: 'Completed 7 days of meditation' },
    { id: '3', name: 'Creative Soul', icon: '🎨', description: 'Created your first artwork' }
  ],
  isLoading: false,
  error: null
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_TAB':
      return { ...state, currentTab: action.payload };
    case 'ADD_MOOD_ENTRY':
      return { 
        ...state, 
        moodEntries: [action.payload, ...state.moodEntries] 
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'UPDATE_USER':
      return { 
        ...state, 
        user: { ...state.user, ...action.payload } 
      };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};