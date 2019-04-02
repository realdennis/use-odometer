import React from 'react';
import PropTypes from 'prop-types';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';
// Using default css for code size concern
const useOdometer = (ref, value, options) => {
  const [od, setOd] = React.useState(null);

  React.useEffect(() => {
    if (ref.current !== null) {
      const instance = new Odometer(
        Object.assign({}, options, { el: ref.current, value })
      );
      setOd(instance);
    }
  }, [ref, options]);
  // initial effect

  React.useEffect(() => {
    od && od.update(value);
  }, [value]);
  // state change effect

  return od;
};
useOdometer.propTypes = {
  ref: PropTypes.isRequired,
  value: PropTypes.number.isRequired
};
export default useOdometer;
