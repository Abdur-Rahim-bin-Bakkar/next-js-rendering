'use client'
import React from 'react';

const error = ({ error, reset }) => {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>⚠️ Something went wrong!</h2>

            <p>{error.message}</p>

            <button onClick={() => reset()}>
                Try Again 🔄
            </button>
        </div>
    );
};

export default error;