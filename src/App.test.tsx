import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import FormCalculator from './components/FormCalculator';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('<App />', () => {
	test('Halaman awal calculator dengan semua state null atau uncheck', async () => {});
});

test('Chek tombol bagi ', () => {
  const button = shallow((<button name="bagi">/</button>));
  button.find('button').simulate('click');

});