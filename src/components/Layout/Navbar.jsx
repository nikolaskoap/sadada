import React from 'react';
import { Search, Bell } from 'lucide-react';
import './navbar.css';

const Navbar = ({ activeTab, onNavigate }) => {
    const links = [
        { id: 'home', label: 'Home' },
        { id: 'roadmap', label: 'Roadmap' },
        { id: 'whitepaper', label: 'Whitepaper' },
        { id: 'team', label: 'Team' },
    ];

    return (
        <nav className="navbar animate-fade-in">
            <div className="navbar-brand">
                <span className="text-gradient">TCG CARD</span>
            </div>

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
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <Bell size={20} color="var(--text-secondary)" />
                </button>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))' }}></div>
            </div>
        </nav>
    );
};

export default Navbar;
