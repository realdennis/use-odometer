# use-odometer
[![Build Status](https://travis-ci.org/realdennis/use-odometer.svg?branch=master)](https://travis-ci.org/realdennis/use-odometer)
[![Coverage Status](https://coveralls.io/repos/github/realdennis/use-odometer/badge.svg?branch=master)](https://coveralls.io/github/realdennis/use-odometer?branch=master)

A React custom hook for an awesome library odometer, you can use it to make your react counting app easily.

## Installation

```bash
$ yarn add use-odometer odometer
```

Remember to install **peerDependency** `odometer`.

## Usage

```jsx
const App = () => {
  const targetRef = React.useRef(null);
  // The ref you want to attach
  const od = useOdometer(targetRef, {
    value: 1234
    //or other config
  });
  return (
    <div className="App">
      <p className="target" ref={targetRef} />
      <button onClick={() => od.update(9999)}>
        {/* change number by call od.update() */}
        Update value
      </button>
    </div>
  );
};
```

## More

In my source code, I use default theme stylesheet, you don't need to import again.

But, if you want to use other themes (like car/digital...etc), you need to explicitly import .

eg.

```jsx
// in your components
import 'odometer/themes/odometer-theme-car.css';
//...
//...
const od = useOdometer(targetRef, {
  value: 1234,
  theme: 'car'
});
//...
//.. the same code
```

---

LICENSE MIT © 2019 realdennis
