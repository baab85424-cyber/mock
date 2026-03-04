require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('./models/Student');
const Result = require('./models/Result');

const MOCK_STUDENT = {
    name: 'BORSE MANISH DHRUV',
    registerNumber: 'DY25SHSP0MCA067',
    mobileNumber: '9619363144',
    emailId: 'dhruvborse57@gmail.com',
    fatherName: 'MANISH',
    fatherMobile: '9833043144',
    college: 'School of Humanities & Science, D Y Patil Deemed To Be University [1022]',
    motherName: 'SEEMA',
    programme: 'MCAH25 - Master of Computer Applications (M.C.A.)',
    usn: 'DY25SHSP0MCA067',
    school: '1022 - School of Humanities & Science, D Y Patil Deemed To Be University'
};

const MOCK_RESULTS = [
    {
        studentRegisterNumber: 'DY25SHSP0MCA067',
        semester: 'I Semester',
        examination: 'JANUARY 2026',
        resultDate: '27/02/2026',
        class: 'Fail',
        mcNo: '',
        courses: [
            { slNo: 1, courseName: 'Java Programming', creditHrs: 3 },
            { slNo: 2, courseName: 'Data base Management System', creditHrs: 3 },
            { slNo: 3, courseName: 'Data Structure', creditHrs: 3 },
            { slNo: 4, courseName: 'Object Oriented Software Engineering', creditHrs: 4 },
            { slNo: 5, courseName: 'Probability and Probability distribution', creditHrs: 4 },
            { slNo: 6, courseName: 'Principles & Practices of Management and Organizat', creditHrs: 4 },
            { slNo: 7, courseName: 'Java Programming Lab', creditHrs: 1 },
            { slNo: 8, courseName: 'Database Management System Lab', creditHrs: 1 },
            { slNo: 9, courseName: 'Data Structure Lab', creditHrs: 1 }
        ].map(course => {
            let gradePoints;
            let remarks;

            if (course.courseName === 'Probability and Probability distribution') {
                gradePoints = 0.0;
                remarks = 'F';
            } else {
                // Randomly assign A (9.0), B+ (8.5), or B (8.0)
                const options = [
                    { gp: 9.0, remark: 'A' },
                    { gp: 8.5, remark: 'B+' },
                    { gp: 8.0, remark: 'B' }
                ];
                const selected = options[Math.floor(Math.random() * options.length)];
                gradePoints = selected.gp;
                remarks = selected.remark;
            }

            return {
                ...course,
                gradePoints,
                creditPoints: parseFloat((course.creditHrs * gradePoints).toFixed(1)),
                remarks
            };
        })
    }
];

// Calculate summary
MOCK_RESULTS.forEach(result => {
    let totalCredits = 0;
    let earnedCredits = 0;
    let totalCreditPoints = 0;

    result.courses.forEach(course => {
        totalCredits += course.creditHrs;
        totalCreditPoints += course.creditPoints;
        if (course.gradePoints > 0) {
            earnedCredits += course.creditHrs;
        }
    });

    const sgpa = parseFloat((totalCreditPoints / totalCredits).toFixed(2));

    result.summary = {
        sgpa: sgpa,
        cgpa: sgpa,
        totalCredits,
        earnedCredits
    };

    result.class = 'Pass';
});

const seedData = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) throw new Error("MONGODB_URI is not defined");

        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB Atlas');

        await Student.deleteMany({});
        await Result.deleteMany({});

        await Student.create(MOCK_STUDENT);
        await Result.insertMany(MOCK_RESULTS);

        console.log('Mock data reverted to Dhruv Borse and seeded successfully');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
};

seedData();
