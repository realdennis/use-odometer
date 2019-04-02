import React from 'react';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';
// Using default css for code size concern
const useOdometer = (ref, options) => {
  const [od, setOd] = React.useState(null);
  React.useEffect(() => {
    if (ref.current !== null) {
      const instance = new Odometer(
        Object.assign({}, options, { el: ref.current })
      );
      setOd(instance);
    }
  }, [ref]);
  return od;
};

export default useOdometer;
