import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocationDisplayType, setMapFitType } from 'app/redux/actions/options';
import {
  LOCATION_DISPLAY_TYPE_DOTS,
  LOCATION_DISPLAY_TYPE_PATH,
  LOCATION_DISPLAY_TYPE_HEATMAP,
  MAP_FIT_TYPE_CURRENT,
  MAP_FIT_TYPE_FULL,
} from 'app/redux/reducers/options';
import Options from 'app/react/components/control-panel/options';

/**
 * Container controlling the value of options passed to the control panel.
 */
const OptionsContainer = ({
  locationDisplayType,
  handleLocationDisplayTypeChange,
  mapFitType,
  handleMapFitTypeChange,
}) => (
  <Options
    locationDisplayType={locationDisplayType}
    onLocationDisplayTypeChange={handleLocationDisplayTypeChange}
    mapFitType={mapFitType}
    onMapFitTypeChange={handleMapFitTypeChange}
  />
);

OptionsContainer.propTypes = {
  locationDisplayType: PropTypes.oneOf([
    LOCATION_DISPLAY_TYPE_DOTS,
    LOCATION_DISPLAY_TYPE_PATH,
    LOCATION_DISPLAY_TYPE_HEATMAP,
  ]).isRequired,
  handleLocationDisplayTypeChange: PropTypes.func.isRequired,
  mapFitType: PropTypes.oneOf([
    MAP_FIT_TYPE_CURRENT,
    MAP_FIT_TYPE_FULL,
  ]).isRequired,
  handleMapFitTypeChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ options }) => ({
  locationDisplayType: options.locationDisplayType,
  mapFitType: options.mapFitType,
});

const mapDispatchToProps = (dispatch) => ({
  handleLocationDisplayTypeChange: (displayType) => dispatch(setLocationDisplayType(displayType)),
  handleMapFitTypeChange: (fitType) => dispatch(setMapFitType(fitType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
