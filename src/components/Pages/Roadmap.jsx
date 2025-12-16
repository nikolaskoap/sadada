import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const Roadmap = () => {
    const milestones = [
        { title: 'Project Launch', date: 'Q1 2024', status: 'completed', desc: 'Initial token generation and website launch.' },
        { title: 'Community Beta', date: 'Q2 2024', status: 'completed', desc: 'Onboarding first 1,000 users for platform testing.' },
        { title: 'Staking Platform', date: 'Q3 2024', status: 'active', desc: 'Release of staking dashboard and rewards mechanism.' },
        { title: 'Mobile App', date: 'Q4 2024', status: 'upcoming', desc: 'iOS and Android application beta release.' },
        { title: 'Global Expansion', date: 'Q1 2025', status: 'upcoming', desc: 'Partnerships with major regions and localization.' },
    ];

    return (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800 }}>Roadmap</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Our journey to decentralized future.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
                {/* Connector Line */}
                <div style={{ position: 'absolute', left: '20px', top: '20px', bottom: '20px', width: '2px', background: 'var(--glass-border)', zIndex: -1 }}></div>

                {milestones.map((item, index) => (
                    <div key={index} style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.5rem' }}>
                            <div style={{
                                background: item.status === 'completed' ? 'var(--accent-primary)' : 'var(--bg-app)',
                                color: item.status === 'completed' ? '#fff' : 'var(--text-muted)',
                                borderRadius: '50%', padding: '0.25rem',
                                border: '2px solid var(--glass-border)',
                                boxShadow: item.status === 'active' ? '0 0 15px var(--accent-primary)' : 'none'
                            }}>
                                {item.status === 'completed' ? <CheckCircle2 size={24} /> : item.status === 'active' ? <Clock size={24} color="var(--accent-primary)" /> : <Circle size={24} />}
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '1.5rem', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{item.title}</h3>
                                <span style={{
                                    fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '20px',
                                    background: 'rgba(255,255,255,0.05)', color: 'var(--accent-secondary)', border: '1px solid var(--glass-border)'
                                }}>{item.date}</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
