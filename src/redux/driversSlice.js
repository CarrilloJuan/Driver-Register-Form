import {createSlice} from '@reduxjs/toolkit';
import apiClient from '../api';

const initialState = {
  status: {
    loading: false,
    error: null,
    success: null,
  },
  driverInfo: null,
};

/*
  createSlice uses immer to let you write reducers as if they were mutating
  the state directly.

  In reality, the reducer receives a proxy state that translates all mutations
  into equivalent copy operations

  https://redux-toolkit.js.org/api/createSlice
*/

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    upSertDriverStart(state, action) {
      state.status.loading = true;
    },
    upSertDriverSuccess(state, action) {
      state.driverInfo = action.payload;
      state.status.loading = false;
      state.status.success = true;
    },
    upSertDriverFailure(state, action) {
      state.status.loading = false;
      state.status.error = action.payload;
    },
  },
});

// Extract the action creators object and the reducer
const {actions, reducer} = driversSlice;

// Extract and export each action creator by name
export const {
  upSertDriverStart,
  upSertDriverSuccess,
  upSertDriverFailure,
} = actions;

// Define a thunk that dispatches those action creators
export const upSertDriver = (
  data,
  isUpdating,
  navigation,
) => async dispatch => {
  dispatch(upSertDriverStart());
  try {
    const apiRequest = isUpdating ? apiClient.put : apiClient.post;
    const response = await apiRequest('driver', data);
    dispatch(upSertDriverSuccess({id: response.data.id, ...data}));
    navigation.replace('Home');
  } catch (error) {
    console.log(error);
    dispatch(upSertDriverFailure);
  }
};

// Export the reducer, either as a default or named export
export default reducer;
