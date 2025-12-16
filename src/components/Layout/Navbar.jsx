import React, { useState } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';
import './navbar.css';

const Navbar = ({ activeTab, onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { id: 'home', label: 'Home' },
        { id: 'roadmap', label: 'Roadmap' },
        { id: 'whitepaper', label: 'Whitepaper' },
        { id: 'team', label: 'Team' },
    ];

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
