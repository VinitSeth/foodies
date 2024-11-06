'use client';
// not keeping in rot directory as we don't want to replace the full with it.
import React from 'react';

interface ErrorProps {
    error: string;
}

const Error: React.FC<ErrorProps> = () => {
    return (
        <main className='error'>
            <h1>An error occured!</h1>
            <p>Failed to create meal. </p>
        </main>
    )
}

export default Error;
