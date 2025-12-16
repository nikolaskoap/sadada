import React from 'react';
import { FileText, Download } from 'lucide-react';

const Whitepaper = () => {
    return (
        <div className="animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800 }}>Whitepaper</h1>
                <button className="glass-card" style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: 'var(--accent-primary)', color: 'white', border: 'none',
                    padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-lg)', fontWeight: 600, cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                    <Download size={20} /> Download PDF
                </button>
            </div>

            <div className="glass-card" style={{ padding: '4rem' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>1. Introduction</h2>
                <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    Miktip is designed to revolutionize the way projects connect with their communities.
                    By leveraging advanced blockchain architectures and a user-centric design philosophy,
                    we create an ecosystem that is both robust and accessible.
                </p>

                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>2. Core Technology</h2>
                <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    Our infrastructure is built on a high-throughput layer that ensures near-instant finality.
                    Smart contracts are formally verified to guarantee security, while our modular API allows
                    seamless integration with existing Web2 and Web3 services.
                </p>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', border: '1px solid var(--glass-border)' }}>
                    <code style={{ fontFamily: 'monospace', color: 'var(--accent-secondary)', fontSize: '1rem' }}>
                        Protocol: v2.4.1<br />
                        Consensus: Proof of Stake Authority<br />
                        Block Time: 0.8s
                    </code>
                </div>

                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>3. Tokenomics</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    The native token serves as the utility and governance backbone of the network.
                    Distribution is mapped over a 5-year vesting schedule to align incentives
                    between the team, early backers, and the community.
                </p>
            </div>
        </div>
    );
};

export default Whitepaper;
