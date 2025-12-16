
import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { maskEmail } from '../../utils/maskEmail';
import './waitlist.css';

const Waitlist = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data, error } = await supabase
                    .from('waitlist')
                    .select('created_at, email')
                    .order('created_at', { ascending: true }); // Prioritas yang daftar duluan

                if (error) throw error;
                if (data) setUsers(data);
            } catch (error) {
                console.error('Error fetching waitlist:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="waitlist-container animate-fade-in">
            <h1 className="waitlist-title text-gradient">Waitlist Participants</h1>
            <p className="waitlist-subtitle">Join the queue for exclusive early access.</p>

            <div className="glass-card waitlist-card">
                {loading ? (
                    <div className="loading-state">Loading participants...</div>
                ) : (
                    <div className="table-responsive">
                        <table className="waitlist-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Email Address</th>
                                    <th>Date Joined</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={index}>
                                            <td className="rank-cell">
                                                <span className={`rank-badge ${index < 3 ? 'top-rank' : ''}`}>
                                                    {index + 1}
                                                </span>
                                            </td>
                                            <td>{maskEmail(user.email)}</td>
                                            <td className="date-cell">
                                                {new Date(user.created_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" style={{ textAlign: 'center', padding: '2rem' }}>
                                            No participants yet. Be the first!
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Waitlist;
