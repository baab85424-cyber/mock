import React from 'react';

const Results = ({ student, results }) => {
    // Use first result from array
    const result = results[0] || {
        semester: 'I Semester',
        examination: 'JANUARY 2026',
        resultDate: '27/02/2026',
        class: 'Pass',
        courses: [],
        summary: { sgpa: 8.25, cgpa: 8.25, totalCredits: 24, earnedCredits: 24 }
    };

    const handlePrint = () => {
        window.print();
    };

    const formatGradePoint = (val) => {
        if (typeof val !== 'number') return val;
        return val.toFixed(1);
    };

    const formatCreditPoint = (val) => {
        if (typeof val !== 'number') return val;
        const formatted = val.toFixed(1);
        if (formatted.indexOf('.') === 1) {
            return `0${formatted}`;
        }
        return formatted;
    };

    return (
        <div className="results-page">
            <style>{`
                @media print {
                    .sidebar, .header, .header-actions, .help-btn-container {
                        display: none !important;
                    }
                    .main-content {
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    .results-page {
                        width: 100% !important;
                    }
                    .card {
                        box-shadow: none !important;
                        border: none !important;
                    }
                }
                .result-header-bar {
                    background-color: #053661;
                    color: white;
                    padding: 15px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .result-header-bar h2 {
                    margin: 0;
                    font-size: 20px;
                    letter-spacing: 1px;
                    flex-grow: 1;
                    text-align: center;
                }
                .header-actions {
                    display: flex;
                    gap: 15px;
                }
                .header-actions span {
                    cursor: pointer;
                    font-size: 14px;
                }
                .header-actions span:hover {
                    text-decoration: underline;
                }
                .student-details-card {
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    padding: 20px;
                    margin-bottom: 25px;
                    background-color: #fcfcfc;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    font-size: 14px;
                }
                .exam-title {
                    text-align: center;
                    margin-bottom: 20px;
                    font-weight: bold;
                    color: #333;
                    text-transform: uppercase;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px;
                }
                .result-sheet-title {
                    background-color: #053661;
                    color: white;
                    text-align: center;
                    padding: 8px;
                    font-weight: bold;
                    font-size: 14px;
                }
                .results-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 15px;
                }
                .results-table th {
                    background-color: #053661;
                    color: white;
                    border: 1px solid #ddd;
                    padding: 10px;
                    font-size: 13px;
                }
                .results-table td {
                    border: 1px solid #ddd;
                    padding: 8px 12px;
                    font-size: 14px;
                }
                .summary-bar {
                    background-color: #053661;
                    color: white;
                    padding: 8px;
                    text-align: center;
                    font-weight: bold;
                    margin: 20px 0 10px;
                }
                .result-summary-text {
                    text-align: center;
                    font-weight: bold;
                    margin: 10px 0;
                    color: #333;
                }
                .footer-note {
                    font-size: 11px;
                    color: #666;
                    margin-top: 20px;
                    line-height: 1.4;
                    padding: 10px;
                    border-top: 1px solid #eee;
                }
                .remark-pass { color: green; }
                .remark-fail { color: red; }
            `}</style>

            <div className="result-header-bar">
                <h2>PROVISIONAL RESULT SHEET</h2>
                <div className="header-actions">
                    <span>Detailed Result</span>
                    <span onClick={handlePrint}>Print</span>
                    <span>Back</span>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="exam-title">
                        {result.semester} {student.programme.split(' - ')[1]} {result.examination} EXAMINATION
                    </div>

                    <div className="student-details-card">
                        <div>
                            <p>USN : {student.usn}</p>
                            <p>Father Name : {student.fatherName}</p>
                        </div>
                        <div>
                            <p>Student Name : {student.name}</p>
                            <p>Mother Name : {student.motherName}</p>
                        </div>
                    </div>

                    <div className="result-sheet-title">RESULT SHEET</div>
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th style={{ width: '60px' }}>Sl. No.</th>
                                <th>Course Name</th>
                                <th style={{ width: '80px' }}>Credit Hrs</th>
                                <th style={{ width: '100px' }}>Grade Points</th>
                                <th style={{ width: '100px' }}>Credit Points</th>
                                <th style={{ width: '80px' }}>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.courses.map((course) => (
                                <tr key={course.slNo}>
                                    <td className="text-center">{course.slNo}</td>
                                    <td>{course.courseName}</td>
                                    <td className="text-center">{course.creditHrs}</td>
                                    <td className="text-center">{formatGradePoint(course.gradePoints)}</td>
                                    <td className="text-center">{formatCreditPoint(course.creditPoints)}</td>
                                    <td className="text-center" style={{ fontWeight: 'bold' }}>
                                        <span className={course.remarks === 'F' ? 'remark-fail' : 'remark-pass'}>
                                            {course.remarks}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p style={{ fontSize: '12px', fontWeight: 'bold', margin: '15px 0' }}>
                        Passing Criteria : 50% minimum in Theory External, 50% minimum in Practical External, 50% in theory IA, 50% in practical IA and 50% in course aggregate
                    </p>

                    <div className="summary-bar">RESULT SUMMARY</div>

                    <div className="result-summary-text">
                        Result : <span className={result.class === 'Pass' ? 'remark-pass' : 'remark-fail'}>{result.class}</span> ,
                        S.G.P.A : {result.summary?.sgpa?.toFixed(2)}
                    </div>

                    <div className="text-center" style={{ fontSize: '13px', color: '#555' }}>
                        School : {student.school}
                    </div>

                    <div className="footer-note">
                        Note : D Y Patil Deemed to be University is not responsible for any inadvertent error that may have crept in the results being published on NET. The results published on net are for immediate information to the examinees. These cannot be treated as original mark sheets.
                    </div>
                </div>
            </div>

            <div className="help-btn-container" style={{ textAlign: 'right', marginTop: '15px' }}>
                <button style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    I Need Help
                </button>
            </div>
        </div>
    );
};

export default Results;
