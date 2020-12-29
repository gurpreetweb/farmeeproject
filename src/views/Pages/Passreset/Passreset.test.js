import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Passreset from './Passreset';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Passreset/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
