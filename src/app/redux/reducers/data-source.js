import {
  SET_USER,
  SET_DEVICE,
  SET_TIMESTAMP_START,
  SET_TIMESTAMP_END,
  SET_MAP_FIT_TYPE,
} from 'app/redux/actions/data-source';
import createReducer from 'app/redux/reducers/create-reducer';

export const MAP_FIT_TYPE_CURRENT = 'current';
export const MAP_FIT_TYPE_FULL = 'full';

const initialStateFactory = () => {
  // By default, set the start timestamp to the beginning of the current day, in local time.
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 1000;

  // By default, set the end timestamp to the beginning of the next day, in local time.
  const tomorrow = today + (24 * 60 * 60);

  return {
    user: null,
    device: null,
    timestamp: {
      start: today,
      end: tomorrow,
    },
    mapFitType: MAP_FIT_TYPE_CURRENT,
  };
};

const setUserReducer = (state, action) => ({
  ...state,
  user: action.payload.user,
});

const setDeviceReducer = (state, action) => ({
  ...state,
  device: action.payload.device,
});

const setTimestampStartReducer = (state, action) => ({
  ...state,
  timestamp: {
    ...state.timestamp,
    start: action.payload.timestamp,
  },
});

const setTimestampEndReducer = (state, action) => ({
  ...state,
  timestamp: {
    ...state.timestamp,
    end: action.payload.timestamp,
  },
});

const setMapFitTypeReducer = (state, action) => ({
  ...state,
  mapFitType: action.payload.fitType,
});

const reducerMapping = {
  [SET_USER]: setUserReducer,
  [SET_DEVICE]: setDeviceReducer,
  [SET_TIMESTAMP_START]: setTimestampStartReducer,
  [SET_TIMESTAMP_END]: setTimestampEndReducer,
  [SET_MAP_FIT_TYPE]: setMapFitTypeReducer,
};

export default createReducer(reducerMapping, initialStateFactory());
