import React from 'react';
import { render} from '@testing-library/react';
import Spinner from './spinner-component';

describe('Spinner component', () => {
    it('should render Spinner', () => {
        expect(render(<Spinner />)).toMatchSnapshot();
    })
})

