import React from 'react';
import PropTypes from 'prop-types';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';
// Using default css for code size concern
const useOdometer = (ref, value, options) => {
  const od = React.useRef(null);
  React.useEffect(() => {
    if (ref.current === null) return;
    od.current = new Odometer(
      Object.assign({}, options, { el: ref.current, value })
    );
  }, [ref]);
  // initial effect

  React.useEffect(() => {
    od.current.update(value);
  }, [value]);
  // state change effect

  return od.current;
};
useOdometer.propTypes = {
  ref: PropTypes.isRequired,
  value: PropTypes.number.isRequired
};
export default useOdometer;
