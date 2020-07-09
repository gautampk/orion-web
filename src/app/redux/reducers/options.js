import { SET_LOCATION_DISPLAY_TYPE, SET_MAP_FIT_TYPE } from 'app/redux/actions/options';
import createReducer from 'app/redux/reducers/create-reducer';

export const LOCATION_DISPLAY_TYPE_DOTS = 'dots';
export const LOCATION_DISPLAY_TYPE_PATH = 'path';
export const LOCATION_DISPLAY_TYPE_HEATMAP = 'heatmap';
export const MAP_FIT_TYPE_CURRENT = 'current';
export const MAP_FIT_TYPE_FULL = 'full';

const initialState = {
  locationDisplayType: LOCATION_DISPLAY_TYPE_DOTS,
  mapFitType: MAP_FIT_TYPE_CURRENT,
};

const setLocationDisplayTypeReducer = (state, action) => ({
  ...state,
  locationDisplayType: action.payload.displayType,
});

const setMapFitTypeReducer = (state, action) => ({
  ...state,
  mapFitType: action.payload.fitType,
});

const reducerMapping = {
  [SET_LOCATION_DISPLAY_TYPE]: setLocationDisplayTypeReducer,
  [SET_MAP_FIT_TYPE]: setMapFitTypeReducer,
};

export default createReducer(reducerMapping, initialState);
