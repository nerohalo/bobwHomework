import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { rootReducerStateFixture } from 'fixtures';
import { mockStore } from 'mocks';

import SuccessStep from './index';

describe('<SuccessStep />', () => {
  it('renders button', () => {
    const store = mockStore(rootReducerStateFixture({}));
    const { getByTestId } = render(<Provider store={store}><SuccessStep /></Provider>);
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
  });
});
