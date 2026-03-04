import React from 'react';
import studentPhoto from '../assets/student.png';
import {
    User, Edit, Bell, FileText, Settings, Calendar,
    BarChart2, FileCheck, Clipboard, LogOut, ChevronRight, Plus
} from 'lucide-react';

const Sidebar = ({ student, activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'edit-profile', label: 'Edit Profile', icon: Edit },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'exam-app', label: 'Exam Application', icon: FileText, hasPlus: true },
        { id: 'online-svcs', label: 'Online Services', icon: BarChart2, hasPlus: true },
        { id: 'practical-tt', label: 'Practical Time Table', icon: Calendar },
        { id: 'theory-tt', label: 'Theory Time Table', icon: Calendar },
        { id: 'results', label: 'Results', icon: Clipboard },
        { id: 'apply-rv', label: 'RV/RT/VS Apply', icon: FileCheck },
        { id: 'rv-apps', label: 'RV/RT/VS Applications', icon: FileCheck },
    ];

    return (
        <div className="sidebar">
            <div className="profile-section">
                <div className="profile-img-container">
                    <img src={studentPhoto} alt="Profile" />
                </div>
                <div className="student-info">
                    <h3>{student.name}</h3>
                    <p>{student.registerNumber}</p>
                    <p>[MCAH25] Master of Comput...</p>
                </div>
            </div>

            <div className="nav-menu">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                        {item.hasPlus && <span className="plus-icon">+</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
