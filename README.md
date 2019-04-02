# use-odometer
[![Build Status](https://travis-ci.org/realdennis/use-odometer.svg?branch=master)](https://travis-ci.org/realdennis/use-odometer)
[![Coverage Status](https://coveralls.io/repos/github/realdennis/use-odometer/badge.svg?branch=master)](https://coveralls.io/github/realdennis/use-odometer?branch=master)

![Demo](https://media.giphy.com/media/LUeLbnjIam07lJlyU3/giphy.gif)

[Try it](https://codesandbox.io/s/1o768qxl0j)

A React custom hook for an awesome library odometer, you can use it to make your react counting app easily.

## Installation

```bash
$ yarn add use-odometer odometer
```

Remember to install **peerDependency** `odometer`.

## Usage

```jsx
const App = () => {
  const [count, setCount] = React.useState(5566);
  const targetRef = React.useRef(null);
  // The ref you want to attach
  useOdometer(targetRef, count);
  return (
    <div className="App">
      <p className="target" ref={targetRef} />
      <button onClick={() => setCount(count+1234)}>
        {/* Just change the count state */}
        +1234
      </button>
    </div>
  );
};
```
See more [odometer options](https://github.hubspot.com/odometer/#advanced)


## More

In my source code, I use default theme stylesheet, you don't need to import again.

But, if you want to use other themes (like car/digital...etc), you need to explicitly import .

eg.

```jsx
// in your components
import 'odometer/themes/odometer-theme-car.css';
//...
//...
useOdometer(targetRef, value, {
  theme: 'car'
});
//...
//.. the same code
```
See more [odometer themes](https://github.hubspot.com/odometer/api/themes/)

---

LICENSE MIT © 2019 realdennis
