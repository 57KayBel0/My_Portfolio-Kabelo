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
      "Bank Fraud Detection Platform is a production-ready AI-powered full-stack application that detects fraudulent banking transactions in real time using an XGBoost machine learning model. The platform combines a React frontend, FastAPI backend, PostgreSQL database, and interactive analytics dashboard to help users analyse transactions, monitor fraud trends, review prediction history, and generate downloadable CSV and PDF reports.",

    problem:
      "Financial institutions process millions of transactions daily, making manual fraud detection nearly impossible. Automated detection systems are essential for identifying suspicious transactions in real time.",

    solution:
      "Developed a complete cloud-deployed fraud detection platform that combines Machine Learning and modern web technologies. Users can submit banking transactions through a React interface, receive instant fraud predictions from a FastAPI backend powered by an XGBoost model, store prediction history in PostgreSQL, visualise fraud trends through interactive charts, and export reports in CSV and PDF formats.",

    architecture: [
      "React Frontend",
      "Axios API Client",
      "FastAPI Backend",
      "XGBoost Machine Learning Model",
      "SQLAlchemy ORM",
      "PostgreSQL Database",
      "Analytics Dashboard",
    ],

    technologies: [
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "XGBoost",
      "Pandas",
      "Tailwind CSS",
      "Recharts",
      "Axios",
      "Render",
      "Vercel",
      "GitHub",
    ],

    features: [
      "AI-powered Fraud Detection",
      "Real-time Predictions",
      "Interactive Dashboard",
      "Fraud Trend Analytics",
      "Fraud Distribution Charts",
      "Prediction History",
      "Search & Filtering",
      "CSV Export",
      "PDF Report Export",
      "PostgreSQL Database",
      "Responsive Design",
      "Cloud Deployment"
    ],

    challenges: [
      "Deploying a Machine Learning model to the cloud",
      "Configuring PostgreSQL with SQLAlchemy",
      "Integrating React with FastAPI",
      "Managing prediction history",
      "Designing an intuitive analytics dashboard",
      "Implementing export functionality for business reporting",
    ],

    achievements: [
      "Built a production-ready full-stack AI application",
      "Integrated React with FastAPI REST APIs",
      "Deployed frontend on Vercel",
      "Deployed backend and PostgreSQL on Render",
      "Integrated XGBoost for real-time fraud prediction",
      "Implemented prediction history and analytics",
      "Built interactive dashboards using Recharts",
      "Added CSV and PDF report generation",
    ],

    lessonsLearned: [
      "Deploying Machine Learning applications to the cloud",
      "Building scalable REST APIs with FastAPI",
      "Integrating PostgreSQL using SQLAlchemy",
      "Designing responsive React dashboards",
      "Managing full-stack deployments using Render and Vercel",
      "Building production-ready AI applications",
    ],

    screenshots: [
      "/images/projects/case-studies/Back-Fraud-dectection/Bank-Fraud-Detection Cover.png",
      
    ],

    github:
      "https://github.com/57KayBel0/Bank-Fraud-Detection",

    demo:
      "https://bank-fraud-detection-five.vercel.app/",
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

  {
    id: 8,

    overview:
      "Freight Rate Prediction is an end-to-end machine learning pipeline developed as part of a Machine Learning Engineer technical assessment. The project predicts freight transportation rates using historical shipment data and includes data preprocessing, exploratory data analysis, feature engineering, model development, hyperparameter tuning, prediction generation, and validation.",

    problem:
      "Freight transportation rates vary according to shipment distance, equipment type, market conditions, quote signals, and other shipment characteristics. The objective was to build a reproducible machine learning pipeline capable of predicting freight rates for unseen shipment requests.",

    solution:
      "Built a complete freight-rate prediction workflow that preprocesses historical shipment data, engineers temporal, route, geographic, and interaction features, compares multiple regression models, tunes the strongest model, generates predictions, and validates the final prediction files using the supplied scoring script.",

    architecture: [
      "Historical Shipment Data",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Random Forest Baseline",
      "CatBoost Regression",
      "Hyperparameter Tuning",
      "Prediction Generation",
      "Validation",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "CatBoost",
      "Matplotlib",
      "Git",
      "GitHub",
    ],

    features: [
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Missing Value Imputation",
      "Temporal Feature Engineering",
      "Route Feature Engineering",
      "Geographic Feature Engineering",
      "Interaction Features",
      "Random Forest Baseline",
      "CatBoost Regression",
      "Hyperparameter Tuning",
      "Prediction Generation",
      "Prediction Validation",
    ],

    challenges: [
      "Preparing historical shipment data for machine learning",
      "Handling missing values using training-set statistics",
      "Engineering useful temporal and geographic features",
      "Representing pickup-to-delivery routes",
      "Comparing multiple regression models",
      "Improving model performance through hyperparameter tuning",
      "Validating generated prediction files",
    ],

    achievements: [
      "Built an end-to-end freight-rate prediction pipeline",
      "Established Random Forest as a baseline model",
      "Improved performance using CatBoost",
      "Developed a tuned CatBoost final model",
      "Achieved an R² score of 0.8706",
      "Achieved an MAE of 103.42",
      "Validated 12,000 final predictions",
      "Validated 31 fixed December predictions",
      "Generated a December freight-rate prediction chart",
    ],

    lessonsLearned: [
      "Importance of feature engineering for structured transportation data",
      "Model comparison and evaluation techniques",
      "Working with categorical variables using CatBoost",
      "Hyperparameter tuning and early stopping",
      "Building reproducible machine learning pipelines",
      "Importance of prediction validation",
    ],

    screenshots: [
      "/images/projects/freight-rate.png",
    ],

    github:
      "https://github.com/57KayBel0/freight-rate-prediction",

    demo: "",
  },

  {
    id: 9,

    overview:
      "Fuel Route Optimizer is a Django REST API application designed to calculate driving routes and recommend cost-effective fuel stops. The application combines OpenRouteService routing, fuel-station data, geocoding, fuel-cost calculations, route caching, and an interactive Leaflet map to support long-distance trip planning.",

    problem:
      "Long-distance transportation requires drivers and fleet operators to consider route distance, vehicle fuel range, fuel consumption, fuel prices, and suitable refueling locations. Manually planning fuel stops can make trips less efficient and increase transportation costs.",

    solution:
      "Developed a Django REST API that calculates routes between locations, determines fuel checkpoints based on vehicle range, searches for nearby fuel stations, identifies cost-effective fuel stops, estimates fuel requirements and total fuel cost, and visualizes the resulting route using Leaflet.",

    architecture: [
      "Django REST API",
      "Address Geocoding",
      "OpenRouteService",
      "Route Calculation",
      "Fuel Station Data",
      "Fuel Stop Selection",
      "Fuel Consumption Calculation",
      "Fuel Cost Calculation",
      "Leaflet Map",
      "Route Caching",
      "SQLite Database",
    ],

    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "JavaScript",
      "Leaflet",
      "OpenRouteService",
      "SQLite",
      "Docker",
      "Geopy",
      "Polyline",
      "REST API",
    ],

    features: [
      "Route Calculation",
      "Address Geocoding",
      "Fuel Checkpoint Detection",
      "Nearby Fuel Station Search",
      "Cost-Effective Fuel Stop Selection",
      "Fuel Consumption Estimation",
      "Total Fuel Cost Estimation",
      "Interactive Leaflet Map",
      "Route Visualization",
      "Route Caching",
      "Docker Support",
    ],

    challenges: [
      "Integrating external routing services",
      "Working with geographic coordinates",
      "Determining appropriate fuel checkpoints",
      "Finding suitable fuel stations along routes",
      "Calculating fuel requirements and costs",
      "Visualizing routes interactively",
      "Reducing repeated routing requests through caching",
    ],

    achievements: [
      "Built a Django REST API for route optimization",
      "Integrated OpenRouteService for route generation",
      "Implemented address geocoding",
      "Implemented fuel checkpoint logic",
      "Added nearby fuel-station search",
      "Implemented cost-effective fuel-station selection",
      "Added fuel consumption and cost calculations",
      "Created interactive Leaflet route visualization",
      "Implemented route caching",
      "Added Docker support",
      "Tested multiple long-distance routes",
    ],

    lessonsLearned: [
      "Integrating external geospatial APIs",
      "REST API development with Django",
      "Working with geographic data",
      "Route and fuel-stop optimization",
      "Interactive map development",
      "Caching external API results",
      "Designing logistics-focused software",
    ],

    screenshots: [
      "/images/projects/fuel-route.png",
    ],

    github:
      "https://github.com/57KayBel0/fuel-route-optimizer",

    demo: "",
  },
];

export default projectDetails;
