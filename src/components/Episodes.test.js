import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

const episodes = [
    {
        name: 'epi 1',
        season: 1,
        number: 1,
        summary: 'strange things happened',
        runtime: 54, 
    },
    {
        name: 'epi 2',
        season: 1,
        number: 2,
        summary: 'stranger things happened',
        runtime: 58,
    }
]

test('renders Episodes without errors', () => {
    render(<Episodes episodes={[]}/>)
})

test('renders change in episodes list correctly', () => {
    // arrange - render episodes with no episodes
    const {rerender} = render(<Episodes episodes={[]}/>)

    // assert episode object should exist & be empty
    let episodeObject = screen.queryAllByTestId('episode');
    expect(episodeObject).toHaveLength(0);

    // use rerender to test transition between states
    rerender(<Episodes episodes={episodes}/>)
    episodeObject = screen.queryAllByTestId('episode');
    expect(episodeObject).toHaveLength(2);
})