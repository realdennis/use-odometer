import React from 'react';
import useOdometer from '../src/index.js';
import { render, fireEvent } from '@testing-library/react';
import  '@testing-library/react/cleanup-after-each'
const initialValue = 5566;
const updateValue = 9999;
const Counter = () => {
  const [count, setCount] = React.useState(initialValue);
  const targetRef = React.useRef(null);
  useOdometer(targetRef, count, {
    format: '(,ddd).dd',
    theme: 'default'
  });
  return (
    <div>
      <p id="target" ref={targetRef} />
      <button onClick={() => setCount(updateValue)}>Update</button>
    </div>
  );
};

test('initial value should be render', () => {
  const { container } = render(<Counter />);
  expect(container.querySelector('#target').odometer.value).toEqual(
    initialValue
  );
});

test('update should work expected', () => {
  const { container } = render(<Counter />);
  fireEvent.click(container.querySelector('button'));
  expect(container.querySelector('#target').odometer.value).toEqual(
    updateValue
  );
});
