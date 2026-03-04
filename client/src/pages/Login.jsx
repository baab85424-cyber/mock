import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [readInstructions, setReadInstructions] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (readInstructions) {
            // Simple mock login
            onLogin();
        } else {
            alert("Please read the instructions and check the box.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Welcome</h1>
                <p className="subtitle">To Student Portal</p>

                <h2 className="signin-header">Sign In</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <span className="input-icon">👤</span>
                        <input
                            type="text"
                            placeholder="Mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-icon">🔒</span>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="captcha-container">
                        <div className="captcha-box">
                            <span className="captcha-icon">✉️</span>
                            <input
                                type="text"
                                value="152498"
                                readOnly
                                className="captcha-value"
                            />
                            <button type="button" className="reload-btn">🔄</button>
                        </div>
                    </div>

                    <div className="input-group">
                        <span className="input-icon">✉️</span>
                        <input
                            type="text"
                            placeholder="Enter Captcha"
                            value={captcha}
                            onChange={(e) => setCaptcha(e.target.value)}
                            required
                        />
                    </div>

                    <div className="checkbox-group">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={readInstructions}
                                onChange={(e) => setReadInstructions(e.target.checked)}
                            />
                            <span className="checkmark"></span>
                            I Have Read the Instructions
                        </label>
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>

                <div className="user-manual">
                    <span>🖨️</span> User Manual
                </div>

                <div className="login-footer">
                    <p>New User? <a href="#">Register Here!</a></p>
                    <p><a href="#">Forgot Password?</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
