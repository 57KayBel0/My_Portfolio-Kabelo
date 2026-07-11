const projectDetails = [
  {
    id: 1,

    overview:
      "The Health Insurance ETL Pipeline is a complete data engineering project designed to ingest, clean, transform, validate, and model healthcare insurance data for analytical reporting. The solution demonstrates a modern ETL workflow using cloud services, relational databases, Docker, SQL, and dbt to build an analytics-ready data warehouse.",

    problem:
      "Healthcare insurance datasets often originate from multiple raw sources with inconsistent formatting and varying data quality. Without a structured ETL process, the data cannot be reliably used for reporting, analytics, or business intelligence.",

    solution:
      "Designed and implemented an end-to-end ETL pipeline that extracts raw healthcare insurance data, performs cleaning and validation using Python, stores processed data in PostgreSQL, and transforms it into dimensional models using dbt for analytical querying.",

    architecture: [
      "Raw Healthcare Dataset",
      "Python ETL Pipeline",
      "AWS Lambda",
      "Amazon S3",
      "PostgreSQL",
      "dbt Data Models",
      "Analytics Layer",
    ],

    technologies: [
      "Python",
      "AWS Lambda",
      "Amazon S3",
      "PostgreSQL",
      "Docker",
      "SQL",
      "dbt",
      "Pandas",
      "Git",
    ],

    features: [
      "End-to-End ETL Pipeline",
      "Data Cleaning",
      "Data Validation",
      "Automated Data Transformation",
      "PostgreSQL Integration",
      "Dockerized Environment",
      "AWS Cloud Deployment",
      "dbt Data Modeling",
      "Dimensional Modeling",
      "Data Quality Checks",
    ],

    challenges: [
      "Cleaning inconsistent healthcare datasets",
      "Building reusable ETL processes",
      "Managing relational database schemas",
      "Designing scalable transformation pipelines",
      "Implementing dimensional data models",
    ],

    achievements: [
      "Developed a production-style ETL workflow",
      "Implemented cloud-based data ingestion",
      "Created analytics-ready dimensional tables",
      "Applied data quality validation techniques",
      "Integrated SQL, Python, Docker, and dbt into a unified workflow",
    ],

    lessonsLearned: [
      "Designing scalable ETL architectures",
      "Cloud-based data engineering concepts",
      "Data warehouse modeling",
      "Importance of automated data validation",
      "Best practices for building production data pipelines",
    ],

    screenshots: [
      "/images/projects/etl.png",
      "/images/projects/etl-2.png",
      "/images/projects/etl-3.png",
      "/images/projects/etl-4.png",
      "/images/projects/etl-5.png",
      "/images/projects/etl-6.png",
      "/images/projects/etl-7.png",
      "/images/projects/etl-8.png",
    ],

    github:
      "https://github.com/57KayBel0/Data_Engineering_Assessment.KM",

    demo: "",
  },

  {
    id: 2,

    overview:
      "Loan Eligibility Prediction is an end-to-end machine learning project that predicts whether a loan application should be approved based on applicant information. The project demonstrates the complete machine learning lifecycle, from data preprocessing and exploratory analysis to model training and evaluation.",

    problem:
      "Financial institutions need reliable methods for assessing loan applications while minimizing financial risk. Manual decision-making is often slow and inconsistent.",

    solution:
      "Developed a machine learning pipeline that preprocesses applicant data, engineers relevant features, trains multiple classification algorithms, and evaluates model performance to support loan approval decisions.",

    architecture: [
      "Dataset",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Machine Learning Model",
      "Model Evaluation",
      "Prediction",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],

    features: [
      "Data Cleaning",
      "Missing Value Handling",
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Model Training",
      "Classification Algorithms",
      "Model Evaluation",
      "Prediction Pipeline",
    ],

    challenges: [
      "Preparing categorical data for machine learning",
      "Handling missing values",
      "Selecting suitable classification algorithms",
      "Evaluating multiple predictive models",
    ],

    achievements: [
      "Built a complete machine learning workflow",
      "Performed detailed exploratory data analysis",
      "Compared multiple classification models",
      "Produced reusable preprocessing pipeline",
    ],

    lessonsLearned: [
      "Importance of feature engineering",
      "Model evaluation techniques",
      "Data preprocessing strategies",
      "Machine learning workflow best practices",
    ],

    screenshots: [
      "/images/projects/loan.png",
      
      "/images/projects/loan-3.png",
      "/images/projects/loan-4.png",
      "/images/projects/loan-5.png",
      "/images/projects/loan-6.png",
      "/images/projects/loan-7.png",
      "/images/projects/loan-8.png",
      "/images/projects/loan-9.png",
      "/images/projects/loan-10.png",
      "/images/projects/loan-11.png",
      "/images/projects/loan-12.png",
      "/images/projects/loan-13.png",
      "/images/projects/loan-14.png",
      "/images/projects/loan-15.png",
      "/images/projects/loan-16.png",
      "/images/projects/loan-17.png",
      "/images/projects/loan-18.png",
      "/images/projects/loan-19.png",
      "/images/projects/loan-20.png",
    ],

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects",

    demo: "",
  },

  {
    id: 3,

    overview:
      "Movie Ratings Analysis explores the MovieLens dataset through exploratory data analysis to uncover user rating behaviour, genre popularity, and movie trends. The project focuses on extracting meaningful insights through statistical analysis and visualization.",

    problem:
      "Movie recommendation systems and entertainment businesses require a deep understanding of user behaviour and movie preferences before developing predictive recommendation models.",

    solution:
      "Performed exploratory data analysis using Python to investigate movie ratings, genre popularity, user behaviour, and relationships between different movie attributes through visual analytics.",

    architecture: [
      "MovieLens Dataset",
      "Data Cleaning",
      "Data Analysis",
      "Visualization",
      "Insights",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],

    features: [
      "Dataset Exploration",
      "Genre Analysis",
      "Rating Distribution",
      "Movie Popularity Analysis",
      "Visualization",
      "Statistical Summary",
      "Correlation Analysis",
    ],

    challenges: [
      "Working with large movie datasets",
      "Visualizing user behaviour",
      "Extracting meaningful business insights",
    ],

    achievements: [
      "Identified rating patterns",
      "Visualized genre popularity",
      "Explored user behaviour trends",
      "Generated business insights using EDA",
    ],

    lessonsLearned: [
      "Importance of exploratory data analysis",
      "Visualization techniques",
      "Data storytelling",
      "Understanding user behaviour through data",
    ],

    screenshots: [
      "/images/projects/movie.png",
      "/images/projects/movie-2.png",
      "/images/projects/movie-3.png",
      "/images/projects/movie-4.png",
      "/images/projects/movie-5.png",
      "/images/projects/movie-6.png",
    ],

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects",

    demo: "",
  },

    {
    id: 4,

    overview:
      "Smart Truck Route Planner is a full-stack logistics application that helps trucking companies and drivers plan optimized delivery routes while complying with FMCSA Hours of Service (HOS) regulations. The system combines route planning, trip management, interactive mapping, and Electronic Logging Device (ELD) functionality into a modern web application.",

    problem:
      "Truck drivers and logistics companies require efficient route planning while ensuring compliance with transportation regulations. Manual trip planning can be time-consuming, inefficient, and prone to regulatory violations.",

    solution:
      "Developed a full-stack web application that allows users to create, manage, and optimize truck routes using interactive maps, REST APIs, and automated Hours of Service calculations. The application also stores trip history and supports ELD log generation.",

    architecture: [
      "React / Next.js Frontend",
      "Django Backend",
      "REST API",
      "PostgreSQL Database",
      "Interactive Maps",
      "Route Optimization",
      "FMCSA HOS Engine",
    ],

    technologies: [
      "React",
      "Next.js",
      "Django",
      "Python",
      "PostgreSQL",
      "REST API",
      "Leaflet",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
    ],

    features: [
      "Interactive Route Planning",
      "Trip Management",
      "Hours of Service (HOS) Tracking",
      "Electronic Logging Device (ELD) Logs",
      "Interactive Maps",
      "RESTful API Integration",
      "Persistent Trip Storage",
      "Driver Dashboard",
      "Route Optimization",
      "Responsive User Interface",
    ],

    challenges: [
      "Implementing FMCSA Hours of Service rules",
      "Integrating frontend and backend services",
      "Managing interactive map components",
      "Designing scalable REST APIs",
      "Synchronizing trip information between client and server",
    ],

    achievements: [
      "Built a complete full-stack logistics application",
      "Integrated interactive mapping functionality",
      "Implemented Hours of Service calculations",
      "Developed RESTful backend APIs",
      "Created responsive user interfaces for trip management",
    ],

    lessonsLearned: [
      "Full-stack application architecture",
      "REST API development",
      "State management",
      "Backend integration",
      "Transportation software development principles",
    ],

    screenshots: [  
      "/images/projects/truck.png",  
      "/images/projects/truck-2.png",
      "/images/projects/truck-3.png",
      "/images/projects/truck-4.png",
      "/images/projects/truck-5.png",
      "/images/projects/truck-6.png",
      "/images/projects/truck-7.png",
      "/images/projects/truck-8.png",
      "/images/projects/truck-9.png",
      
    ],

    github:
      "https://github.com/57KayBel0/SmartTruck-Route-Planner",

    demo: "",
  },

  {
    id: 5,

    overview:
      "Bank Fraud Detection is a machine learning project focused on identifying fraudulent financial transactions through predictive analytics. The project demonstrates how classification algorithms can be used to detect suspicious activity while minimizing false positives.",

    problem:
      "Financial institutions process millions of transactions daily, making manual fraud detection nearly impossible. Automated detection systems are essential for identifying suspicious transactions in real time.",

    solution:
      "Developed a machine learning workflow that preprocesses transaction data, trains classification models, evaluates performance, and identifies potentially fraudulent transactions using predictive analytics.",

    architecture: [
      "Transaction Dataset",
      "Data Cleaning",
      "Feature Engineering",
      "Machine Learning Models",
      "Fraud Prediction",
      "Performance Evaluation",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],

    features: [
      "Data Cleaning",
      "Feature Engineering",
      "Exploratory Data Analysis",
      "Fraud Classification",
      "Model Training",
      "Model Evaluation",
      "Prediction Pipeline",
      "Performance Visualization",
    ],

    challenges: [
      "Working with imbalanced datasets",
      "Reducing false positives",
      "Selecting suitable classification algorithms",
      "Evaluating fraud detection performance",
    ],

    achievements: [
      "Built a complete fraud detection workflow",
      "Applied supervised machine learning techniques",
      "Produced meaningful data visualizations",
      "Generated predictive insights from transaction data",
    ],

    lessonsLearned: [
      "Fraud detection concepts",
      "Classification model evaluation",
      "Feature engineering",
      "Machine learning best practices",
    ],

    screenshots: [
      "/images/projects/fraud.png",
      "/images/projects/fraud-2.png",
      "/images/projects/fraud-3.png",
    ],

    github:
      "https://github.com/57KayBel0",

    demo: "",
  },

    {
    id: 6,

    overview:
      "Iris Data Exploration is an exploratory data analysis (EDA) project that investigates the famous Iris flower dataset using descriptive statistics and professional data visualizations. The project focuses on understanding feature relationships, identifying patterns, and preparing the dataset for future machine learning applications.",

    problem:
      "Before building machine learning models, it is essential to understand the characteristics of the dataset, identify relationships between variables, detect outliers, and verify class distributions.",

    solution:
      "Performed comprehensive exploratory data analysis using Python by cleaning the dataset, generating descriptive statistics, creating multiple visualizations, and analyzing feature relationships between the three Iris flower species.",

    architecture: [
      "Iris Dataset",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "Data Visualization",
      "Insights",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],

    features: [
      "Data Cleaning",
      "Descriptive Statistics",
      "Species Distribution",
      "Histogram Analysis",
      "Scatter Plot Analysis",
      "Pairplot Visualization",
      "Correlation Heatmap",
      "Boxplot Analysis",
      "Feature Relationship Analysis",
    ],

    challenges: [
      "Selecting meaningful visualizations",
      "Interpreting statistical relationships",
      "Presenting analytical findings clearly",
    ],

    achievements: [
      "Performed complete exploratory data analysis",
      "Generated multiple professional visualizations",
      "Identified relationships between flower characteristics",
      "Prepared the dataset for future machine learning projects",
    ],

    lessonsLearned: [
      "Importance of exploratory data analysis",
      "Choosing suitable visualizations",
      "Understanding feature relationships",
      "Data storytelling",
    ],

    screenshots: [
      "/images/projects/iris.png",
      "/images/projects/iris-2.png",
      "/images/projects/iris-3.png",
      "/images/projects/iris-4.png",
      "/images/projects/iris-5.png",
      
      
    ],

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects",

    demo: "",
  },

  {
    id: 7,

    overview:
      "Breast Cancer Model Evaluation is a machine learning project focused on evaluating classification models for breast cancer diagnosis. The project compares model performance using industry-standard evaluation metrics and visualization techniques to identify the most reliable predictive model.",

    problem:
      "Medical diagnosis requires highly accurate predictive models to assist healthcare professionals in detecting breast cancer while minimizing false positives and false negatives.",

    solution:
      "Built and evaluated multiple classification models using the Breast Cancer Wisconsin dataset. The workflow included data preprocessing, feature engineering, model training, performance evaluation, and visualization of classification results.",

    architecture: [
      "Breast Cancer Dataset",
      "Data Cleaning",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "Performance Visualization",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],

    features: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Classification Models",
      "Confusion Matrix",
      "ROC Curve",
      "Precision & Recall",
      "Model Comparison",
      "Performance Evaluation",
    ],

    challenges: [
      "Selecting suitable evaluation metrics",
      "Comparing multiple machine learning models",
      "Balancing model performance and interpretability",
    ],

    achievements: [
      "Compared multiple classification algorithms",
      "Visualized model performance using evaluation metrics",
      "Applied industry-standard machine learning evaluation techniques",
      "Developed an end-to-end model evaluation workflow",
    ],

    lessonsLearned: [
      "Machine learning evaluation techniques",
      "Classification metrics",
      "ROC analysis",
      "Model comparison strategies",
    ],

    screenshots: [
      "/images/projects/breast-cancer.png",
      "/images/projects/breast-cancer-2.png",
      "/images/projects/breast-cancer-3.png",
      "/images/projects/breast-cancer-4.png",
      "/images/projects/breast-cancer-5.png",
      "/images/projects/breast-cancer-6.png",
    ],

    github:
      "https://github.com/57KayBel0",

    demo: "",
  },
];

export default projectDetails;
