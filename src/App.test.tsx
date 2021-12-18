import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';
import FormCalculator from './components/FormCalculator';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const Wrapper = shallow(<FormCalculator />);

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('<App />', () => {
	test('Halaman awal calculator dengan semua state null atau uncheck', async () => {});
});

test('Chek tombol bagi', () => {
	const button = shallow(<button name='bagi'>/</button>);
	button.find('button').simulate('click');
});

describe('Tampilan form kalkulator', () => {
	it('test render formnya', () => {
		render(<FormCalculator />);
	});

	it('Render Modul FormCalculator', () => {
		expect(Wrapper).toMatchSnapshot();
	});

	describe('Mount component', () => {
		describe('Event Test', () => {
			it('Klik ceklist event', () => {});
		});
	});
});