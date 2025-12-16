import React from 'react';
import Navbar from './Navbar';

export const AppShell = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', paddingBottom: '2rem' }}>
            <Navbar />

            <main style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 2rem' }}>
                {children}
            </main>
        </div>
    );
};
