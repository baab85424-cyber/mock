import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Profile from './pages/Profile';
import Results from './pages/Results';
import Login from './pages/Login';
import axios from 'axios';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const [student, setStudent] = useState(null);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchData = async () => {
            const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            try {
                const profileRes = await axios.get(`${API_BASE_URL}/api/profile`);
                setStudent(profileRes.data);

                const resultsRes = await axios.get(`${API_BASE_URL}/api/results`);
                setResults(resultsRes.data);
            } catch (err) {
                console.error("API Error", err);
            }
        };
        fetchData();
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Login onLogin={() => setIsAuthenticated(true)} />;
    }

    if (!student) return <div>Loading...</div>;

    return (
        <div className="layout-container">
            <Sidebar
                student={student}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header onSignOut={() => setIsAuthenticated(false)} />
                <main className="main-content">
                    {activeTab === 'profile' && <Profile student={student} />}
                    {activeTab === 'results' && <Results student={student} results={results} />}
                    {activeTab !== 'profile' && activeTab !== 'results' && (
                        <div className="card">
                            <div className="card-header">{activeTab.toUpperCase()}</div>
                            <div className="card-body">Content for {activeTab} will be implemented soon.</div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;
