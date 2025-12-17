import React, { useState } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';
import './navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { id: 'home', label: 'Home' },
        { id: 'roadmap', label: 'Roadmap' },
        { id: 'whitepaper', label: 'Whitepaper' },
        { id: 'team', label: 'Team' },
        { id: 'waitlist', label: 'Participants' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className="navbar animate-fade-in" style={{ position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.7)' }}>
            <div className="navbar-brand">
                <span className="text-gradient">TCG CARD</span>
            </div>

            {/* Desktop Links */}
            <div className="navbar-links">
                {links.map(link => (
                    <button
                        key={link.id}
                        className="nav-link"
                        onClick={() => scrollToSection(link.id)}
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
                            className="mobile-nav-link"
                            onClick={() => scrollToSection(link.id)}
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
