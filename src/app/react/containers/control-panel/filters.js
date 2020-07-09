import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAccuracyFilter, setMapFitTypeFilter } from 'app/redux/actions/filters';
import {
  MAP_FIT_TYPE_CURRENT,
  MAP_FIT_TYPE_FULL,
} from 'app/redux/reducers/filters';
import Filters from 'app/react/components/control-panel/filters';

const MIN_ACCURACY_THRESHOLD = 5;
const MAX_ACCURACY_THRESHOLD = 1000;

/**
 * Container controlling the value of all filters passed to the control panel.
 */
const FiltersContainer = ({
  accuracyThreshold,
  setAccuracyThreshold,
  mapFitType,
  setMapFitType,
  width,
}) => (
  <Filters
    threshold={accuracyThreshold}
    minAccuracy={MIN_ACCURACY_THRESHOLD}
    maxAccuracy={MAX_ACCURACY_THRESHOLD}
    width={width}
    onAccuracyThresholdChange={setAccuracyThreshold}
    mapFitType={mapFitType}
    onMapFitTypeChange={setMapFitType}
  />
);

FiltersContainer.propTypes = {
  accuracyThreshold: PropTypes.number.isRequired,
  setAccuracyThreshold: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  mapFitType: PropTypes.oneOf([
    MAP_FIT_TYPE_CURRENT,
    MAP_FIT_TYPE_FULL,
  ]).isRequired,
  setMapFitType: PropTypes.func.isRequired,
};

const mapStateToProps = ({ context, filters }) => ({
  width: context.isCompact ? context.width - 60 : 510,
  accuracyThreshold: filters.accuracyThreshold,
  mapFitType: options.mapFitType,
});

const mapDispatchToProps = (dispatch) => ({
  setAccuracyThreshold: (threshold) => dispatch(setAccuracyFilter(threshold)),
  setMapFitType: (fitType) => dispatch(setMapFitTypeFilter(fitType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);
