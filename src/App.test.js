import { render, screen } from '@testing-library/react';

import FormReducert from './components/FormReducert';

test('renders the FormReducert h1', () => {
  render(<FormReducert />);
  const headingElement = screen.getByText('Wallet');
  expect(headingElement).toBeInTheDocument();
});

// Step 2: Test the updateTimes and initializeTimes functions
// The next step is to validate the behavior of the updateTimes and initializeTimes reducer functions.

// Write a unit test for the initializeTimes function to validate that it returns the correct expected value.

// Write a unit test for the updateTimes function to validate that it returns the same value that is provided in the state. This unit test is important as it will be updated later when the logic of changing the available times based on the selected date is implemented.
