import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CallToAction from './components/CallToAction/CallToAction';
import BookingForm from './components/BookingForm/BookingForm';

//data needed
const timeOptions = ['08:00', '08:30', '09:00'];

test('renders the FormReducert h1', () => {
  render(
    <MemoryRouter>
      <CallToAction />
    </MemoryRouter>
  );
  const headingElement = screen.getByText('Little Lemon');
  expect(headingElement).toBeInTheDocument();
});
test('Email input field is ok', () => {
  render(
    <MemoryRouter>
      <BookingForm timeOptions={timeOptions} />
    </MemoryRouter>
  );
  const emailInput = screen.getByLabelText('Email');

  expect(emailInput).toHaveAttribute('required');
});
