import { SET_ACCURACY_FILTER, SET_MAP_FIT_TYPE_FILTER } from 'app/redux/actions/filters';
import createReducer from 'app/redux/reducers/create-reducer';

export const MAP_FIT_TYPE_CURRENT = 'current';
export const MAP_FIT_TYPE_FULL = 'full';

const initialState = {
  accuracyThreshold: Infinity,
  mapFitType: MAP_FIT_TYPE_CURRENT,
};

const setAccuracyFilterReducer = (state, action) => ({
  ...state,
  accuracyThreshold: action.payload.threshold,
});

const setMapFitTypeFilterReducer = (state, action) => ({
  ...state,
  mapFitType: action.payload.fitType,
});

const reducerMapping = {
  [SET_ACCURACY_FILTER]: setAccuracyFilterReducer,
  [SET_MAP_FIT_TYPE_FILTER]: setMapFitTypeFilterReducer,
};

export default createReducer(reducerMapping, initialState);
