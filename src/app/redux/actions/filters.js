export const SET_ACCURACY_FILTER = 'SET_ACCURACY_FILTER';
export const SET_MAP_FIT_TYPE_FILTER = 'SET_MAP_FIT_TYPE';

/**
 * Set the location point accuracy filter threshold value.
 *
 * @param {number} threshold Threshold accuracy (in meters) below which points should be
 *                           filtered out.
 * @return {Object} Action for setting the accuracy filter threshold.
 */
export const setAccuracyFilter = (threshold) => ({
  type: SET_ACCURACY_FILTER,
  payload: { threshold },
});

/**
 * Set the map fit display type on the map.
 *
 * @param {string} fitType One of the map fit type string constants.
 * @return {Object} Action for setting the map fit type.
 */
export const setMapFitTypeFilter = (fitType) => ({
  type: SET_MAP_FIT_TYPE_FILTER,
  payload: { fitType },
});
