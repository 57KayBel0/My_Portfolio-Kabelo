const caseStudies = [
  {
    id: 1,

    slug: "health-insurance-etl",

    title: "Health Insurance ETL Pipeline",

    subtitle:
      "Automated ETL pipeline for extracting, cleaning, validating, transforming, and loading health insurance datasets into an analytics-ready PostgreSQL warehouse.",

    category: "Data Engineering",

    featured: true,

    role: "Data Engineer",

    duration: "3 Weeks",

    status: "Completed",

    industry: "Healthcare",

    database: "PostgreSQL",

    github:
      "https://github.com/57KayBel0/Data_Engineering_Assessment.KM",

    live: "",

    technologies: [
      "Python",
      "PostgreSQL",
      "Docker",
      "dbt",
      "Pandas",
      "SQL",
    ],

    overview:
      "This project demonstrates a complete end-to-end data engineering workflow. Raw healthcare insurance datasets are extracted, cleaned, validated, transformed into a dimensional warehouse model, and loaded into PostgreSQL for business intelligence and analytics.",

    problem:
      "Healthcare insurance datasets often contain duplicate records, inconsistent formatting, missing values, and multiple raw file structures. These issues make reporting and analysis unreliable and time-consuming.",

    solution:
      "A modular Python ETL pipeline was built to automate the entire workflow. The solution validates incoming datasets, cleans the data, performs transformations using dbt, and loads high-quality data into PostgreSQL using a reusable architecture.",

    architecture: [
      "Raw CSV Files",
      "Python ETL Pipeline",
      "Data Validation",
      "Data Cleaning",
      "PostgreSQL",
      "dbt Transformations",
      "Analytics & Reporting",
    ],

    metrics: [
      {
        label: "Datasets",
        value: "3",
      },
      {
        label: "Database Tables",
        value: "5",
      },
      {
        label: "Technologies",
        value: "6",
      },
      {
        label: "Automation",
        value: "100%",
      },
    ],

    results: [
      "Built a fully automated ETL workflow.",
      "Improved data quality through validation and cleaning.",
      "Created an analytics-ready PostgreSQL warehouse.",
      "Designed reusable ETL modules for future datasets.",
      "Implemented a star-schema data model for reporting.",
    ],

    lessons: [
      "Design ETL pipelines as modular, reusable components.",
      "Data validation should happen before loading into the database.",
      "Well-designed schemas improve analytical performance.",
      "dbt simplifies transformation logic and documentation.",
      "Automation significantly reduces manual processing time.",
    ],

    gallery: [
      "/images/projects/case-studies/health-insurance-etl/lambda-function.png",
      "/images/projects/case-studies/health-insurance-etl/lambda-success.png",
      "/images/projects/case-studies/health-insurance-etl/postgres-schema.png",
      "/images/projects/case-studies/health-insurance-etl/dbt-project.png",
      "/images/projects/case-studies/health-insurance-etl/dbt-run.png",
      "/images/projects/case-studies/health-insurance-etl/dbt-tests.png",
      "/images/projects/case-studies/health-insurance-etl/docker-environment.png",
      "/images/projects/case-studies/health-insurance-etl/final-pipeline.png",
    ],
  },

  {
    id: 2,

    slug: "loan-eligibility-prediction",

    title: "Loan Eligibility Prediction",

    subtitle:
      "Machine learning solution that predicts whether a loan application should be approved using customer demographic and financial information.",

    category: "Machine Learning",

    featured: true,

    role: "Machine Learning Engineer",

    duration: "2 Weeks",

    status: "Completed",

    industry: "Financial Services",

    database: "CSV Dataset",

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects",

    live: "",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
    ],

    overview:
      "This project focuses on predicting loan approval decisions using supervised machine learning. The workflow includes data preprocessing, exploratory data analysis, feature engineering, model training, evaluation, and prediction.",

    problem:
      "Financial institutions process thousands of loan applications every day. Manual assessment is time-consuming and can introduce inconsistencies. A predictive model can assist in identifying applicants who are more likely to qualify for a loan.",

    solution:
      "A complete machine learning pipeline was developed to clean the dataset, handle missing values, encode categorical variables, train classification models, and evaluate their performance before making loan approval predictions.",

    architecture: [
      "Raw Loan Dataset",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Model Training",
      "Prediction",
    ],

    metrics: [
      {
        label: "Dataset",
        value: "Loan Records",
      },
      {
        label: "Pipeline",
        value: "End-to-End",
      },
      {
        label: "Algorithms",
        value: "Classification",
      },
      {
        label: "Automation",
        value: "100%",
      },
    ],

    results: [
      "Prepared and cleaned the loan dataset.",
      "Performed exploratory data analysis.",
      "Engineered predictive features.",
      "Built and evaluated classification models.",
      "Generated loan approval predictions.",
    ],

    lessons: [
      "Data preprocessing has a major impact on model performance.",
      "Feature engineering improves prediction quality.",
      "Visualizing the dataset reveals important business insights.",
      "Comparing multiple models leads to better model selection.",
      "Evaluation metrics are more informative than accuracy alone.",
    ],

    gallery: [
      "/images/projects/loan.png",
      "/images/projects/loan-3.png",
      "/images/projects/loan-4.png",
      "/images/projects/loan-5.png",
      "/images/projects/loan-6.png",
      "/images/projects/loan-7.png",
      "/images/projects/loan-8.png",
      "/images/projects/loan-9.png",
      "/images/projects/loan-10.png",
    ],
  },
  
  {
    id: 3,

    slug: "movie-ratings-analysis",

    title: "Movie Ratings Analysis",

    subtitle:
      "Exploratory data analysis of the MovieLens dataset to uncover user rating behaviour, genre popularity, and movie trends through statistical analysis and visualization.",

    category: "Data Analysis",

    featured: true,

    role: "Data Analyst",

    duration: "1 Week",

    status: "Completed",

    industry: "Entertainment",

    database: "MovieLens Dataset",

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects",

    live: "",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],

    overview:
      "This project explores movie ratings using exploratory data analysis techniques. The objective was to understand viewer preferences, identify rating patterns, analyze genre popularity, and communicate findings through effective visualizations.",

    problem:
      "Streaming platforms generate massive amounts of user ratings. Understanding these ratings helps businesses recommend content, improve engagement, and identify popular genres.",

    solution:
      "Using Python and data visualization libraries, the dataset was cleaned, explored, and analyzed to reveal meaningful trends in user behaviour and movie popularity.",

    architecture: [
      "MovieLens Dataset",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Visualization",
      "Insights",
    ],

    metrics: [
      {
        label: "Dataset",
        value: "MovieLens",
      },
      {
        label: "Analysis",
        value: "EDA",
      },
      {
        label: "Visualizations",
        value: "Multiple",
      },
      {
        label: "Language",
        value: "Python",
      },
    ],

    results: [
      "Identified the highest-rated movies.",
      "Compared genre popularity.",
      "Analyzed rating distributions.",
      "Created informative visualizations.",
      "Generated actionable business insights.",
    ],

    lessons: [
      "EDA is essential before model building.",
      "Visualization makes complex data understandable.",
      "Feature distributions reveal hidden trends.",
      "Data quality directly affects analytical outcomes.",
      "Business insights come from asking the right questions.",
    ],

    gallery: [
      "/images/projects/movie.png",
      "/images/projects/movie-2.png",
      "/images/projects/movie-3.png",
      "/images/projects/movie-4.png",
      "/images/projects/movie-5.png",
      "/images/projects/movie-6.png",
    ],
    },

    {
    id: 4,

    slug: "smart-truck-route-planner",

    title: "Smart Truck Route Planner",

    subtitle:
      "A full-stack logistics platform that optimizes delivery routes, supports FMCSA Hours of Service regulations, and provides interactive trip planning with real-time mapping.",

    category: "Full Stack Development",

    featured: true,

    role: "Full Stack Developer",

    duration: "4 Weeks",

    status: "Completed",

    industry: "Logistics",

    database: "PostgreSQL",

    github:
      "https://github.com/57KayBel0/SmartTruck-Route-Planner",

    live: "",

    technologies: [
      "React",
      "Next.js",
      "Django",
      "Python",
      "PostgreSQL",
      "REST API",
      "Leaflet",
    ],

    overview:
      "Smart Truck Route Planner is a full-stack logistics application developed to improve fleet route planning and trip management. It enables users to create optimized delivery routes, visualize trips on interactive maps, and manage transportation workflows while considering Hours of Service regulations.",

    problem:
      "Fleet operators often rely on manual planning, leading to inefficient routes, higher fuel costs, and scheduling conflicts. Drivers must also comply with FMCSA Hours of Service regulations, making manual planning increasingly difficult.",

    solution:
      "The application combines a React frontend with a Django REST backend to automate trip planning. It calculates efficient routes, manages delivery information, integrates interactive mapping using Leaflet, stores operational data in PostgreSQL, and provides an intuitive interface for logistics planning.",

    architecture: [
      "React Frontend",
      "REST API",
      "Django Backend",
      "Route Optimization",
      "Leaflet Maps",
      "PostgreSQL Database",
    ],

    metrics: [
      {
        label: "Architecture",
        value: "Full Stack",
      },
      {
        label: "Backend",
        value: "Django",
      },
      {
        label: "Frontend",
        value: "React",
      },
      {
        label: "Database",
        value: "PostgreSQL",
      },
    ],

    results: [
      "Built a complete logistics management platform.",
      "Implemented interactive route visualization.",
      "Integrated Django REST APIs with React.",
      "Stored operational data using PostgreSQL.",
      "Designed a scalable full-stack architecture.",
    ],

    lessons: [
      "Separating frontend and backend improves maintainability.",
      "REST APIs simplify communication between services.",
      "Interactive maps significantly improve user experience.",
      "Database design is essential for logistics applications.",
      "Building scalable applications requires modular architecture.",
    ],

    gallery: [
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
  },

  {
    id: 5,

    slug: "bank-fraud-detection",

    title: "Bank Fraud Detection",

    subtitle:
      "Machine learning solution for detecting potentially fraudulent financial transactions using classification algorithms and predictive analytics.",

    category: "Machine Learning",

    featured: true,

    role: "Machine Learning Engineer",

    duration: "2 Weeks",

    status: "Completed",

    industry: "Banking",

    database: "CSV Dataset",

    github: "https://github.com/57KayBel0",

    live: "",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
    ],

    overview:
      "This project focuses on identifying fraudulent banking transactions using supervised machine learning techniques. The workflow includes data cleaning, exploratory data analysis, feature engineering, model training, and evaluation to distinguish legitimate transactions from fraudulent ones.",

    problem:
      "Financial institutions process millions of transactions every day, making manual fraud detection impossible. An intelligent prediction model helps identify suspicious transactions quickly and accurately.",

    solution:
      "A machine learning pipeline was developed to preprocess transaction data, engineer meaningful features, train classification models, and evaluate performance using fraud detection metrics.",

    architecture: [
      "Transaction Dataset",
      "Data Cleaning",
      "Feature Engineering",
      "Machine Learning Model",
      "Fraud Prediction",
    ],

    metrics: [
      {
        label: "Project",
        value: "Machine Learning",
      },
      {
        label: "Algorithms",
        value: "Classification",
      },
      {
        label: "Dataset",
        value: "Financial Transactions",
      },
      {
        label: "Automation",
        value: "100%",
      },
    ],

    results: [
      "Prepared and cleaned transaction data.",
      "Performed fraud-focused exploratory analysis.",
      "Built and evaluated classification models.",
      "Generated fraud predictions.",
      "Improved understanding of transaction risk patterns.",
    ],

    lessons: [
      "Class imbalance must be carefully handled in fraud datasets.",
      "Feature engineering strongly influences fraud detection accuracy.",
      "Precision and recall are often more useful than accuracy.",
      "Visualization helps uncover hidden fraud patterns.",
      "Machine learning supports faster financial risk assessment.",
    ],

    gallery: [
      "/images/projects/fraud.png",
      "/images/projects/fraud-2.png",
      "/images/projects/fraud-3.png",
      "/images/projects/fraud-4.png",
      "/images/projects/fraud-5.png",
    ],
  },

  {
    id: 6,

    slug: "iris-data-exploration",

    title: "Iris Data Exploration",

    subtitle:
      "Exploratory data analysis of the Iris flower dataset using statistical analysis and visualization to understand feature relationships and species characteristics.",

    category: "Data Analysis",

    featured: true,

    role: "Data Analyst",

    duration: "1 Week",

    status: "Completed",

    industry: "Research",

    database: "CSV Dataset",

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects",

    live: "",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],

    overview:
      "This project explores the famous Iris dataset using exploratory data analysis techniques. The analysis focuses on understanding feature distributions, identifying relationships between flower measurements, and comparing the three Iris species through statistical summaries and visualizations.",

    problem:
      "Before building predictive models, it is important to understand the dataset, identify feature relationships, detect outliers, and evaluate class separation through exploratory analysis.",

    solution:
      "Using Python and visualization libraries, the dataset was explored through descriptive statistics, correlation analysis, scatter plots, pair plots, histograms, and box plots to reveal meaningful patterns.",

    architecture: [
      "Iris Dataset",
      "Data Cleaning",
      "Statistical Analysis",
      "Visualization",
      "Business Insights",
    ],

    metrics: [
      {
        label: "Dataset",
        value: "Iris",
      },
      {
        label: "Features",
        value: "4",
      },
      {
        label: "Species",
        value: "3",
      },
      {
        label: "Language",
        value: "Python",
      },
    ],

    results: [
      "Explored feature distributions.",
      "Compared Iris species visually.",
      "Analyzed feature correlations.",
      "Created statistical visualizations.",
      "Identified separable classes.",
    ],

    lessons: [
      "EDA is the foundation of data science.",
      "Visualization reveals patterns hidden in raw data.",
      "Correlation analysis improves feature understanding.",
      "Simple datasets are excellent for learning ML concepts.",
      "Clear visualizations improve communication.",
    ],

    gallery: [
      "/images/projects/iris.png",
      "/images/projects/iris-2.png",
      "/images/projects/iris-3.png",
      "/images/projects/iris-4.png",
      "/images/projects/iris-5.png",
    ],
  },

  {
    id: 7,

    slug: "breast-cancer-model-evaluation",

    title: "Breast Cancer Model Evaluation",

    subtitle:
      "Comparative machine learning analysis of the Breast Cancer Wisconsin dataset to evaluate classification models and identify the best-performing approach for diagnosis prediction.",

    category: "Machine Learning",

    featured: true,

    role: "Machine Learning Engineer",

    duration: "2 Weeks",

    status: "Completed",

    industry: "Healthcare",

    database: "Breast Cancer Wisconsin Dataset",

    github:
      "https://github.com/57KayBel0",

    live: "",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
    ],

    overview:
      "This project evaluates multiple supervised machine learning classification models using the Breast Cancer Wisconsin dataset. The objective is to compare model performance and determine the most suitable algorithm for predicting whether a tumour is benign or malignant.",

    problem:
      "Accurate and timely diagnosis plays a critical role in breast cancer treatment. Machine learning can assist healthcare professionals by identifying patterns within diagnostic data and supporting clinical decision-making.",

    solution:
      "A complete machine learning workflow was implemented, including data preprocessing, exploratory analysis, feature selection, model training, performance evaluation, and comparison of multiple classification algorithms.",

    architecture: [
      "Breast Cancer Dataset",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
    ],

    metrics: [
      {
        label: "Dataset",
        value: "Breast Cancer Wisconsin",
      },
      {
        label: "Models",
        value: "Multiple",
      },
      {
        label: "Task",
        value: "Classification",
      },
      {
        label: "Language",
        value: "Python",
      },
    ],

    results: [
      "Prepared and explored the dataset.",
      "Compared multiple machine learning algorithms.",
      "Evaluated performance using classification metrics.",
      "Identified the strongest performing model.",
      "Produced reliable diagnostic predictions.",
    ],

    lessons: [
      "Model comparison improves decision-making.",
      "Medical datasets require careful preprocessing.",
      "Evaluation metrics should extend beyond accuracy.",
      "Feature importance improves model interpretation.",
      "Machine learning can effectively support healthcare analytics.",
    ],

    gallery: [
      "/images/projects/breast-cancer.png",
      "/images/projects/breast-cancer-2.png",
      "/images/projects/breast-cancer-3.png",
      "/images/projects/breast-cancer-4.png",
      "/images/projects/breast-cancer-5.png",
    ],
  },
]
export default caseStudies;