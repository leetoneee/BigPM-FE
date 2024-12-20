type Staff = {
  id: number;
  staffName: string;
  phone: string;
  hireDate: string; // Date in UTC format
  role: 'Senior' | 'Junior' | 'Internship' | 'Fresher';
  position:
    | 'Business Analyst'
    | 'Tester'
    | 'Frontend Developer'
    | 'Backend Developer'
    | 'Designer'
    | 'Project Manager'
    | 'Product Owner';
  email: string;
};

export type { Staff };
