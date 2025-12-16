import React from 'react';
import { FileText, Download } from 'lucide-react';
import './whitepaper.css';

const Whitepaper = () => {
    return (
        <div className="whitepaper-container animate-fade-in">
            <div className="whitepaper-header">
                <h1 className="whitepaper-title text-gradient">Whitepaper</h1>
                <button className="glass-card download-btn">
                    <Download size={20} /> Download PDF
                </button>
            </div>

            <div className="glass-card whitepaper-content">
                <h2 className="section-title">1. Introduction</h2>
                <p className="section-text">
                    Miktip is designed to revolutionize the way projects connect with their communities.
                    By leveraging advanced blockchain architectures and a user-centric design philosophy,
                    we create an ecosystem that is both robust and accessible.
                </p>

                <h2 className="section-title">2. Core Technology</h2>
                <p className="section-text">
                    Our infrastructure is built on a high-throughput layer that ensures near-instant finality.
                    Smart contracts are formally verified to guarantee security, while our modular API allows
                    seamless integration with existing Web2 and Web3 services.
                </p>

                <div className="tech-specs-box">
                    <code className="tech-specs-code">
                        Protocol: v2.4.1<br />
                        Consensus: Proof of Stake Authority<br />
                        Block Time: 0.8s
                    </code>
                </div>

                <h2 className="section-title">3. Tokenomics</h2>
                <p className="section-text">
                    The native token serves as the utility and governance backbone of the network.
                    Distribution is mapped over a 5-year vesting schedule to align incentives
                    between the team, early backers, and the community.
                </p>
            </div>
        </div>
    );
};

export default Whitepaper;
