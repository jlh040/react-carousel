import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { ExpectationFailed } from 'http-errors';

it('renders without crashing', () => {
    render(<Card />);
});

it('matches the snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});