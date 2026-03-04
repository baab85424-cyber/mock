import React from 'react';
import { LogOut } from 'lucide-react';

const Header = ({ onSignOut }) => {
    return (
        <header className="header">
            <h1 style={{ flex: 1, textAlign: 'center' }}>051 - D Y PATIL UNIVERSITY, NAVI MUMBAI</h1>
            <div className="logout-btn" onClick={onSignOut} style={{ cursor: 'pointer', paddingRight: '20px' }}>
                <LogOut size={20} />
            </div>
        </header>
    );
};

export default Header;
