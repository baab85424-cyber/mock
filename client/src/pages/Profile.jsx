import React from 'react';
import studentPhoto from '../assets/student.png';

const Profile = ({ student }) => {
    const profileFields = [
        { label: 'Student Name', value: student.name },
        { label: 'Register number', value: student.registerNumber },
        { label: 'Mobile Number', value: student.mobileNumber },
        { label: 'Email Id', value: student.emailId },
        { label: 'Father / Guardian Name', value: student.fatherName },
        { label: 'Father / Guardian Mobile', value: student.fatherMobile },
        { label: 'College / Department', value: student.college },
    ];

    return (
        <div className="profile-page">
            {/* Note section from screenshot */}
            <div className="card" style={{ marginBottom: '20px', padding: '15px', borderLeft: '4px solid #1e88e5' }}>
                <p style={{ fontWeight: '600', marginBottom: '10px' }}>Exam Application Form Note:</p>
                <p style={{ fontSize: '13px', color: '#666' }}>&gt; Students are allowed to submit one exam application in an examination, hence make sure that you have selected all the appearing courses in exam application.</p>
                <p style={{ fontSize: '13px', color: '#666' }}>&gt; Students are not allowed to make any changes after application is submitted.</p>

                <p style={{ fontWeight: '600', margin: '15px 0 10px' }}>RV / RT / VS Application From Note:</p>
                <p style={{ fontSize: '13px', color: '#666' }}>&gt; 1. Students are allowed to submit one RV / RT / VS application in an exam, make sure that you have selected all the courses required for RV / RT / VS.</p>
                <p style={{ fontSize: '13px', color: '#666' }}>&gt; 2. Students are not allowed to make any changes after application is submitted.</p>
            </div>

            <div className="card">
                <div className="card-header">Student Profile</div>
                <div className="card-body" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                    <div style={{
                        width: '150px',
                        height: '180px',
                        border: '1px solid #ddd',
                        padding: '5px',
                        backgroundColor: '#fff',
                        flexShrink: 0
                    }}>
                        <img src={studentPhoto} alt="Student" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <table style={{ border: 'none', flexGrow: 1 }}>
                        <tbody>
                            {profileFields.map((field, index) => (
                                <tr key={index}>
                                    <td style={{ border: 'none', padding: '10px 0', fontWeight: '500', width: '300px' }}>{field.label}</td>
                                    <td style={{ border: 'none', padding: '10px 0', width: '20px' }}>:</td>
                                    <td style={{ border: 'none', padding: '10px 0' }}>{field.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="text-right" style={{ textAlign: 'right', marginTop: '10px' }}>
                <button style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    I Need Help
                </button>
            </div>
        </div>
    );
};

export default Profile;
