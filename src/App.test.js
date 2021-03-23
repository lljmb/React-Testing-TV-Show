import React from 'react';
import {screen, render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// spies
import {fetchShow as mockFetchShow} from './api/fetchShow'
jest.mock('./api/fetchShow')


test('App renders without errors', () => {
    mockFetchShow.mockResolvedValueOnce({
        data: {
         image: { original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg" },
        name: "Stranger Things",
        summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
        _embedded: { 
            episodes: [ { name: "Chapter One: The Vanishing of Will Byers", season: 1, number: 1,summary: 'strange things happened', runtime: 54, },
            {name: "Chapter Two: The Weirdo on Maple Street", season: 1, number: 2, summary: 'stranger things happened', runtime: 58, }, {name: "Chapter Three: Holly Jolly", season: 1, number: 3, summary: "the strangest thing happened", runtime: 62, } ] 
        }
         } 
    });
    render(<App />)
})

test('renders stranger things data when button is clicked', async () => {
    mockFetchShow.mockResolvedValueOnce({
        data: {
         image: { original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg" },
        name: "Stranger Things",
        summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
        _embedded: { 
            episodes: [ { name: "Chapter One: The Vanishing of Will Byers", season: 1, number: 1,summary: 'strange things happened', runtime: 54, },
            {name: "Chapter Two: The Weirdo on Maple Street", season: 1, number: 2, summary: 'stranger things happened', runtime: 58, }, {name: "Chapter Three: Holly Jolly", season: 1, number: 3, summary: "the strangest thing happened", runtime: 62, } ] 
        }
         } 
    });

    render(<App />)

    await waitFor(() => {
        expect(screen.queryByTestId('app')).toBeInTheDocument();
     }) 
})