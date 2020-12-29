import React from 'react';
import ReactDOM from 'react-dom';
import Registerstudent from './Registerstudent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Registerstudent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
