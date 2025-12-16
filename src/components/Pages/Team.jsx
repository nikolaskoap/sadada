import React from 'react';

const TeamMember = ({ name, role, img }) => (
    <div className="glass-card" style={{
        padding: '2rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
        <div style={{
            width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
            border: '2px solid var(--accent-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem',
            boxShadow: '0 0 20px rgba(0,0,0,0.2)'
        }}>
            {img}
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{name}</h3>
        <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{role}</p>
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Expertise in building scalable systems and user-centric interfaces.
        </p>
    </div>
)

const Team = () => {
    return (
        <div className="animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800 }}>Our Visionaries</h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    Meet the minds behind Miktip.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <TeamMember name="Alex Johnson" role="Founder & CEO" img="🦅" />
                <TeamMember name="Sarah Chen" role="CTO" img="💻" />
                <TeamMember name="Michael Ross" role="Product Lead" img="🚀" />
                <TeamMember name="Jessica Wu" role="Head of Design" img="🎨" />
                <TeamMember name="David Kim" role="Blockchain Lead" img="⛓️" />
                <TeamMember name="Emily R." role="Community Manager" img="🌍" />
            </div>
        </div>
    );
};

export default Team;
