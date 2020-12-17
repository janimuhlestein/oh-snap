import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('it renders the contact form', () =>{
    it('renders', ()=>{
        render(<Contact/>)
    });

    it('renders snapshot', () =>{
        const { asFragment } = render (<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('link is correct', ()=> {
    if('inserts text into the links',()=>{
        const { getByTestId } = render(<Contact />);
        const { getByLabelText } = render(<Contact />);

        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
        expect(getByLabelText('submit')).toHaveTextContent('Submit');
    });
})

