import React, { useState } from 'react';
import img1 from '../../assets/gambar 1.jpg';
import img2 from '../../assets/gambar 2.jpg';
import './home.css';

import { supabase } from '../../lib/supabaseClient';

const Home = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name && formData.email) {
            setLoading(true);
            try {
                const { error } = await supabase
                    .from('waitlist')
                    .insert([{ name: formData.name, email: formData.email }]);

                if (error) throw error;

                console.log('Data saved to Supabase');
                setSubmitted(true);
            } catch (error) {
                console.error('Error saving:', error.message);
                alert('Failed to join waitlist. Please check console for details.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="home-container animate-fade-in">
            <div className="home-layout-grid">

                {/* Left: Visual Image (Gambar 1) */}
                <div className="visual-card-wrapper float-animation" style={{ animationDelay: '0s' }}>
                    <div className="glass-card visual-glass-card rotate-left">
                        <img
                            src={img1}
                            alt="Visual 1"
                            className="visual-image"
                        />
                    </div>
                </div>

                {/* Center: Text & Form */}
                <div className="content-center">
                    <h1 className="hero-title text-gradient">
                        Join the Future of Decentralization.
                    </h1>
                    <p className="hero-text">
                        Secure your spot. Be the first to access the next generation platform.
                        Limited spots available for early adopters.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="glass-card float-animation waitlist-form-container">
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <label className="form-label">Email Address</label>
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
                        <div className="glass-card success-message" style={{ borderColor: '#4ade80' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4ade80' }}>You're on the list!</h3>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>We'll be in touch soon.</p>
                        </div>
                    )}
                </div>

                {/* Right: Visual Image (Gambar 2) */}
                <div className="visual-card-wrapper float-animation" style={{ animationDelay: '-3s' }}>
                    <div className="glass-card visual-glass-card rotate-right">
                        <img
                            src={img2}
                            alt="Visual"
                            className="visual-image"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
