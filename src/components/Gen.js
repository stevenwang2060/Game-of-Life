import React from 'react';
import { GenWrapper, GenCounter } from './styles';

export default ({ generationCount }) => {
    return (
        <GenWrapper>
            <GenCounter>
                <p>Generations: {generationCount}</p>
            </GenCounter>
        </GenWrapper>
    );
}