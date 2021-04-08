import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

test('render app landing page. Check if an empty note is created.', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Click here to start taking note./i);
  expect(linkElement).toBeInTheDocument();
});
