/**
 * @format
 */
/*************  I need to fix some node modules ********/
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

let component: any;

describe('<App />', () => {
  beforeEach(() => {
    component = render(<App />);
  });

  it('Render ok', () => {
    console.log(component);
  });
});
