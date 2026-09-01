export const RESUME_DATA = {
  name: "Devesh Dubey",
  title: "Data Analyst | Aspiring Data Scientist",
  summary: "Data Analyst with hands-on experience building end-to-end ETL pipelines, normalized relational databases, and Power BI dashboards that turn raw operational data into decision-ready insights. I work with Python, SQL, Machine Learning, statistical analysis, hypothesis testing, data visualization, databases, and business analytics.",
  contact: {
    email: "deveshdubey625@gmail.com",
    phone: "+91-7823826696",
    github: "https://github.com/deveshdubey18",
    linkedin: "https://www.linkedin.com/in/deveshdubey",
  },
  skills: {
    programming: ["Python", "Java", "SQL", "SQL Joins", "CTEs", "Window Functions", "Subqueries"],
    dataAnalysis: ["Data Cleaning", "EDA", "ETL", "Statistical Analysis", "Hypothesis Testing", "A/B Testing Fundamentals"],
    machineLearning: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "KNN", "SVM", "AutoML", "FLAML", "XGBoost"],
    libraries: ["Pandas", "NumPy", "Scikit-learn", "Imbalanced-learn", "SMOTE", "FLAML"],
    visualization: ["Power BI", "DAX", "Power Query", "Tableau", "Matplotlib", "Seaborn"],
    databases: ["MySQL", "MongoDB", "Database schema design", "Normalization", "Referential integrity"],
    tools: ["Excel", "Pivot Tables", "VLOOKUP", "Power Query", "Power Pivot", "Jupyter", "Google Colab", "Git", "GitHub", "VS Code"],
    core: ["Probability", "Statistics", "Linear Algebra", "Data Wrangling", "Model Evaluation"]
  },
  projects: [
    {
      id: "aeroxdb",
      title: "AeroxDB Dashboard",
      category: "DATABASE · BUSINESS INTELLIGENCE",
      technologies: ["MySQL", "SQL", "Power BI", "DAX"],
      description: "Designed a fully normalized MySQL database with 9 interconnected tables for airline operations including fleet management, crew assignments, bookings, and revenue. Built operational SQL queries for analytics and connected them to comprehensive Power BI dashboards for real-time monitoring.",
      github: "https://github.com/deveshdubey18/Aerox_Database_Management",
      metrics: ["9 Interconnected Tables", "SQL Analytics", "Power BI Dashboard"]
    },
    {
      id: "heartdisease",
      title: "Heart Disease Risk Prediction",
      category: "MACHINE LEARNING · CLASSIFICATION",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "FLAML", "XGBoost", "SMOTE"],
      description: "Built an end-to-end machine learning pipeline covering data preprocessing, missing-value handling, encoding, feature scaling, and class imbalance handling with SMOTE. Used FLAML AutoML to optimize hyperparameters for an XGBoost model.",
      github: "https://github.com/deveshdubey18/Heart_Risk_PredictionModel",
      metrics: ["97.73% Testing Accuracy", "End-to-End Pipeline", "SMOTE Class Balancing"]
    },
    {
      id: "candidateselection",
      title: "Candidate Selection Prediction Model",
      category: "MACHINE LEARNING · PREDICTIVE ANALYTICS",
      technologies: ["Python", "Scikit-learn", "Random Forest", "PCA", "K-Means", "SMOTE"],
      description: "A Machine Learning project that predicts candidate selection using academic, professional, and technical attributes. Developed a complete pipeline with outlier treatment, PCA dimensionality reduction, SMOTE-based class balancing, Random Forest classification, and K-Means clustering.",
      github: "https://github.com/deveshdubey18/Candidate_Selection_Prediction_Model",
      metrics: ["87.57% RF Accuracy", "PCA Dim Reduction", "K-Means Clustering"]
    },
    {
      id: "calcount",
      title: "Calcount",
      category: "ANDROID APPLICATION · HEALTH & FITNESS",
      technologies: ["Java", "Android Studio", "API Integration", "Mobile UI/UX"],
      description: "An API-based calories and nutrition tracking Android application created using Android Studio. Demonstrates application-development experience and the ability to consume third-party data APIs in a mobile environment.",
      github: "https://github.com/deveshdubey18/calcount",
      metrics: ["API-based Tracking", "Java Architecture", "Android Studio"]
    },
    {
      id: "gymmanagement",
      title: "Gym Management System",
      category: "SOFTWARE APPLICATION · MANAGEMENT SYSTEM",
      technologies: ["React", "Vite", "JavaScript", "CSS"],
      description: "A frontend administration application designed for gym management. Built using modern web development practices with React and Vite to manage member registrations, schedules, and administrative operations efficiently.",
      github: "https://github.com/deveshdubey18/Gym-Administration-application",
      metrics: ["React Architecture", "Vite Build System", "Admin Interface"]
    }
  ],
  experience: [
    {
      title: "Cloud Computing Intern",
      company: "iFuture Technologies",
      date: "July 2024",
      points: ["Cloud fundamentals", "IaaS", "PaaS", "SaaS", "Virtualization", "Infrastructure management", "VMware virtual environments"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Mumbai",
      gpa: "CGPI: 8.68"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "RJ College, Ghatkopar",
      gpa: ""
    }
  ],
  certifications: [
    "Intermediate SQL Developer Certification — HackerRank (2026)",
    "Data Analytics Job Simulation — Forage | Deloitte Australia (June 2026)",
    "Data Analytics Job Simulation — Forage | Quantium (June 2026)",
    "Avishkar Research Presentation, 19th Edition (December 2024)"
  ]
};
