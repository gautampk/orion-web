import React from 'react';
import PropTypes from 'prop-types';
import { Label, SelectList, Spacing, Tabs, Text, TextField } from 'react-elemental';
import {
  MAP_FIT_TYPE_CURRENT,
  MAP_FIT_TYPE_FULL,
} from 'app/redux/reducers/data-source';

/**
 * Controls for setting parameters related to the source of location data for visualization.
 */
const DataSource = ({
  users,
  devices,
  timestampStart,
  timestampEnd,
  mapFitType,
  onUserChange,
  onDeviceChange,
  onTimestampStartChange,
  onTimestampEndChange,
  onMapFitTypeChange,
}) => (
  <div>
    <Spacing size="small" bottom>
      <Text uppercase bold>
        Data source
      </Text>
    </Spacing>

    <Spacing bottom style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Spacing size="small" style={{ flexGrow: 1 }} right>
        <Label
          label="User"
          sublabel="User for queried locations"
        />
        <SelectList
          options={users.map((user) => ({ value: user, label: user }))}
          onChange={onUserChange}
        />
      </Spacing>

      <Spacing size="small" style={{ flexGrow: 1 }} left>
        <Label
          label="Device"
          sublabel="Device owned by this user"
        />
        <SelectList
          options={devices.map((user) => ({ value: user, label: user }))}
          onChange={onDeviceChange}
        />
      </Spacing>
    </Spacing>

    <Spacing bottom style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Spacing size="small" style={{ flexGrow: 1 }} right>
        <Label
          label="Start date"
          sublabel="Start of the interval to query"
        />
        <TextField
          type="date"
          value={timestampStart}
          onChange={onTimestampStartChange}
          style={{ width: '100%' }}
        />
      </Spacing>

      <Spacing size="small" style={{ flexGrow: 1 }} left>
        <Label
          label="End date"
          sublabel="End of the interval to query"
        />
        <TextField
          type="date"
          value={timestampEnd}
          onChange={onTimestampEndChange}
          style={{ width: '100%' }}
        />
      </Spacing>
    </Spacing>

    <Spacing bottom style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Text size="kilo" color="gray50" uppercase bold>
        Map Fitting
      </Text>
      <Text size="lambda" color="gray25">
        Choose how the map is fit to location data
      </Text>
    </Spacing>

    <Tabs
      onChange={onMapFitTypeChange}
      value={mapFitType}
      options={[
        { value: MAP_FIT_TYPE_CURRENT, label: 'Current' },
        { value: MAP_FIT_TYPE_FULL, label: 'Full' },
      ]}
    />
  </div>
);

DataSource.propTypes = {
  // Array of available users
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Array of devices owned by this user
  devices: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Start of the timestamp to query
  timestampStart: PropTypes.string.isRequired,
  // End of the timestamp to query
  timestampEnd: PropTypes.string.isRequired,
  // Callback to invoke when the user is changed
  onUserChange: PropTypes.func.isRequired,
  // Callback to invoke when the device is changed
  onDeviceChange: PropTypes.func.isRequired,
  // Callback to invoke when the starting timestamp is changed
  onTimestampStartChange: PropTypes.func.isRequired,
  // Callback to invoke when the ending timestamp is changed
  onTimestampEndChange: PropTypes.func.isRequired,
  // Map Fit Types
  mapFitType: PropTypes.oneOf([
    MAP_FIT_TYPE_CURRENT,
    MAP_FIT_TYPE_FULL,
  ]).isRequired,
  onMapFitTypeChange: PropTypes.func.isRequired,
};

export default DataSource;
