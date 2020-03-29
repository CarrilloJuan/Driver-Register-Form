import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  driverData: [],
};

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    upSertDriverStart(state, action) {
      state.loading = true;
    },
    upSertDriverSuccess(state, action) {
      state.driverData.push(action.payload);
      state.loading = false;
    },
    upSertDriverFailure(state, action) {
      state.loading = false;
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
export const registerDriver = params => async dispatch => {
  dispatch(upSertDriverStart());
  try {
    setTimeout(() => dispatch(upSertDriverSuccess(params)), 3000);
  } catch (error) {
    dispatch(upSertDriverFailure);
  }
};

// Export the reducer, either as a default or named export
export default reducer;
