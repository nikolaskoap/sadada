import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu, X, Users } from 'lucide-react';
import './navbar.css';
import { supabase } from '../../lib/supabaseClient';
import { maskEmail } from '../../utils/maskEmail';

const Navbar = ({ activeTab, onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [recentUsers, setRecentUsers] = useState([]);
    const [showUserList, setShowUserList] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await supabase
                .from('waitlist')
                .select('email')
                .order('created_at', { ascending: false })
                .limit(5);

            if (data) setRecentUsers(data);
        };

        fetchUsers();
        // Optional: Set up real-time subscription here
    }, []);

    const links = [
        { id: 'home', label: 'Home' },
        { id: 'roadmap', label: 'Roadmap' },
        { id: 'whitepaper', label: 'Whitepaper' },
        { id: 'team', label: 'Team' },
    ];
    // ... rest of code ...

    const handleNavigate = (id) => {
        onNavigate(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar animate-fade-in">
            <div className="navbar-brand">
                <span className="text-gradient">TCG CARD</span>
            </div>

            {/* Desktop Links */}
            <div className="navbar-links">
                {links.map(link => (
                    <button
                        key={link.id}
                        className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
                        onClick={() => onNavigate(link.id)}
                    >
                        {link.label}
                    </button>
                ))}
            </div>

            <div className="navbar-actions">
                <div style={{ position: 'relative' }}>
                    <Search size={20} color="var(--text-secondary)" />
                </div>

                {/* Recent Users Feature */}
                <div style={{ position: 'relative' }}
                    onMouseEnter={() => setShowUserList(true)}
                    onMouseLeave={() => setShowUserList(false)}
                >
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Users size={20} color="var(--accent-primary)" />
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            {recentUsers.length > 0 ? recentUsers.length + '+' : ''}
                        </span>
                    </button>

                    {showUserList && recentUsers.length > 0 && (
                        <div className="glass-card" style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            padding: '1rem',
                            minWidth: '220px',
                            zIndex: 1000,
                            marginTop: '10px'
                        }}>
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>Recently Joined</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {recentUsers.map((user, idx) => (
                                    <div key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }}></span>
                                        {maskEmail(user.email)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <Bell size={20} color="var(--text-secondary)" />
                </button>

                {/* Mobile Menu Button */}
                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>

                <div className="avatar-placeholder"></div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    {links.map(link => (
                        <button
                            key={link.id}
                            className={`mobile-nav-link ${activeTab === link.id ? 'active' : ''}`}
                            onClick={() => handleNavigate(link.id)}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
