export const SET_LOCATION_DISPLAY_TYPE = 'SET_LOCATION_DISPLAY_TYPE';
export const SET_MAP_FIT_TYPE = 'SET_MAP_FIT_TYPE';

/**
 * Set the location data display type on the map.
 *
 * @param {string} displayType One of the location display type string constants.
 * @return {Object} Action for setting the location display type.
 */
export const setLocationDisplayType = (displayType) => ({
  type: SET_LOCATION_DISPLAY_TYPE,
  payload: { displayType },
});

/**
 * Set the map fit display type on the map.
 *
 * @param {string} displayType One of the map fit type string constants.
 * @return {Object} Action for setting the map fit type.
 */
export const setMapFitType = (fitType) => ({
  type: SET_MAP_FIT_TYPE,
  payload: { fitType },
});
