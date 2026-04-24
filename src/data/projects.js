export const projects = [
  {
    id: 'stress-analyzer',
    title: 'Student Stress Analyzer',
    category: 'aiml',
    categoryLabel: 'AI / ML',
    tech: ['Python', 'Flask', 'Scikit-Learn', 'Pandas'],
    description:
      'A Flask-Python system using ML to analyze student mental health patterns. Collects lifestyle data and classifies stress levels with actionable wellness recommendations.',
    highlights: [
      'Decision Tree & Logistic Regression models for stress classification',
      'Real-time prediction via Flask web form interface',
      'Rule-based recommendation engine for personalized wellness suggestions',
    ],
    technicalDetail:
      'Trained on a synthetic dataset of student habits — sleep hours, study time, physical activity, social media usage. Features engineered and accuracy validated with stratified train-test split.',
  },
  {
    id: 'school-management',
    title: 'School Management System',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    description:
      'A role-based system managing daily school operations — from student enrollment to fee collection and staff salary processing. Replaces manual record-keeping with structured, queryable data.',
    highlights: [
      'Role-based access control for admin, teachers, and staff',
      'Fee management with payment tracking and due alerts',
      'Salary module with monthly generation and payment history',
    ],
    technicalDetail:
      'Normalized relational schema — separate tables for users, roles, transactions, and academic records linked via foreign keys. Avoids data duplication and supports complex queries across modules.',
  },
  {
    id: 'hostel-management',
    title: 'Hostel Management System',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    description:
      'Manages hostel room allocation, student-to-room mapping, and occupancy tracking. Designed to handle capacity constraints and prevent double-booking.',
    highlights: [
      'Room inventory with capacity and real-time availability status',
      'Student check-in/check-out with date logging',
      'Automated vacancy calculation based on current occupancy',
    ],
    technicalDetail:
      'Focus on database normalization and efficient query handling. Capacity logic blocks allocation when rooms are full and surfaces available rooms first — effective resource management.',
  },
];
