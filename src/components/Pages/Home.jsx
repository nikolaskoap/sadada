import React, { useState } from 'react';
import img1 from '../../assets/gambar 1.jpg';
import img2 from '../../assets/gambar 2.jpg';

const Home = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email) {
            console.log('Waitlist Data:', formData);
            setSubmitted(true);
            // TODO: Send to backend API
        }
    };

    return (
        <div className="animate-fade-in" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh'
        }}>
            <div className="home-layout-grid">

                {/* Left: Visual Image (Gambar 1) */}
                <div className="float-animation" style={{ animationDelay: '0s', maxWidth: '280px', width: '100%' }}>
                    <div className="glass-card" style={{
                        padding: '1rem',
                        transform: 'rotate(-2deg)',
                        background: 'rgba(255,255,255,0.05)'
                    }}>
                        <img
                            src={img1}
                            alt="Visual 1"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'var(--radius-lg)',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>

                {/* Center: Text & Form */}
                <div style={{ maxWidth: '500px', textAlign: 'center', margin: '0 auto' }}>
                    <h1 className="text-gradient" style={{
                        fontSize: '3.5rem',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem'
                    }}>
                        Join the Future of Decentralization.
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        lineHeight: 1.6
                    }}>
                        Secure your spot. Be the first to access the next generation platform.
                        Limited spots available for early adopters.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="glass-card float-animation" style={{ padding: '2rem' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                                <input
                                    type="email"
                                    className="input-field"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <button type="submit" className="btn-primary">
                                Join Waitlist
                            </button>
                        </form>
                    ) : (
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', borderColor: '#4ade80' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4ade80' }}>You're on the list!</h3>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>We'll be in touch soon.</p>
                        </div>
                    )}
                </div>

                {/* Right: Visual Image (Gambar 2) */}
                <div className="float-animation" style={{ animationDelay: '-3s', maxWidth: '280px', width: '100%' }}>
                    <div className="glass-card" style={{
                        padding: '1rem',
                        transform: 'rotate(2deg)',
                        background: 'rgba(255,255,255,0.05)'
                    }}>
                        <img
                            src={img2}
                            alt="Visual"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'var(--radius-lg)',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
