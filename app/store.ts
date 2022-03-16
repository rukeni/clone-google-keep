import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

// import appointmentReducer from '@/features/appointment/appointmentSlice';
// import layoutReducer from '@/features/layout/layoutSlice';
// import patientListFilterReducer from '@/features/patientListFilter/patientListFilterSlice';
// import patientRecordReducer from '@/features/patientRecord/patientRecordSlice';
// import { patientListApi } from '@/services/patientList';
export function makeStore() {
  return configureStore({
    reducer: {
    }
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
