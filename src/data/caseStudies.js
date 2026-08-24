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

    title: "Bank Fraud Detection Platform",

    subtitle:
      "AI-powered full-stack fraud detection platform for analysing financial transactions, identifying potential fraud, and monitoring financial risk through an interactive analytics dashboard.",

    category: "Machine Learning",

    featured: true,

    role: "Machine Learning Engineer & Full Stack Developer",

    duration: "2 Weeks",

    status: "Completed",

    industry: "Banking & Financial Services",

    database: "PostgreSQL",

    github:
      "https://github.com/57KayBel0/Bank-Fraud-Detection",

    live:
      "https://bank-fraud-detection-five.vercel.app/",

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
      "React Router",
      "Render",
      "Vercel",
      "GitHub",
    ],

    overview:
      "The Bank Fraud Detection Platform is a full-stack AI application designed to analyse financial transactions and identify potentially fraudulent activity. The platform combines a React frontend, FastAPI backend, XGBoost machine learning model, and PostgreSQL database into an interactive fraud monitoring system.",

    problem:
      "Financial institutions process large volumes of transactions, making it difficult to manually identify suspicious activity efficiently. The goal of this project was to create a system that could analyse transaction information, generate fraud predictions, store prediction history, and provide users with an intuitive dashboard for monitoring financial activity.",

    solution:
      "The solution combines machine learning with a full-stack web application. Users can submit transaction information through the React dashboard, which communicates with a FastAPI backend. The trained XGBoost model analyses the transaction and returns a prediction and probability. Results are stored in PostgreSQL and exposed through analytics, history, alerts, and model-monitoring features.",

    architecture: [
      "React Frontend",
      "React Router",
      "Axios API Client",
      "FastAPI REST API",
      "XGBoost Machine Learning Model",
      "SQLAlchemy ORM",
      "PostgreSQL Database",
      "Fraud Analytics API",
      "Interactive React Dashboard",
      "Vercel Frontend Deployment",
      "Render Backend Deployment",
    ],

    metrics: [
      {
        label: "AI Model",
        value: "XGBoost",
      },
      {
        label: "Model Accuracy",
        value: "99.97%",
      },
      {
        label: "Database",
        value: "PostgreSQL",
      },
      {
        label: "Deployment",
        value: "Vercel + Render",
      },
    ],

    results: [
      "Developed a complete full-stack bank fraud detection platform.",
      "Integrated an XGBoost machine learning model with a FastAPI REST API.",
      "Built an interactive React dashboard for fraud monitoring.",
      "Implemented transaction prediction with probability scoring.",
      "Stored prediction history using PostgreSQL and SQLAlchemy.",
      "Added fraud analytics and transaction trend visualizations.",
      "Added fraud distribution monitoring with risk categories.",
      "Implemented transaction history and alert monitoring.",
      "Added AI model information and performance monitoring.",
      "Implemented reporting and export functionality.",
      "Deployed the frontend on Vercel and backend on Render.",
    ],

    lessons: [
      "Machine learning models become significantly more useful when integrated into complete applications rather than being used only in notebooks.",
      "FastAPI provides an effective way to expose machine learning predictions through REST APIs.",
      "PostgreSQL provides persistent storage for transaction and prediction history.",
      "Interactive visualizations make financial and machine learning results easier to interpret.",
      "A production-style AI application requires frontend, backend, database, machine learning, and deployment components to work together.",
      "Separating the frontend and backend deployments makes the application easier to maintain and scale.",
    ],

    gallery: [
      "/images/projects/case-studies/Back-Fraud-dectection/Bank-Fraud-Detection Cover.png",
      "/images/projects/case-studies/Back-Fraud-dectection/analytics.png",
      "/images/projects/case-studies/Back-Fraud-dectection/fraud-trend.png",
      "/images/projects/case-studies/Back-Fraud-dectection/prediction.png",
      "/images/projects/case-studies/Back-Fraud-dectection/history.png",
      "/images/projects/case-studies/Back-Fraud-dectection/alerts.png",
      "/images/projects/case-studies/Back-Fraud-dectection/model.png",
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
      "React",
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
  
  {
    id: 8,

    slug: "freight-rate-prediction",

    title: "Freight Rate Prediction",

    subtitle:
      "End-to-end machine learning pipeline for predicting freight transportation rates from historical shipment data using a tuned CatBoost regression model.",

    category: "Machine Learning",

    featured: true,

    role: "Machine Learning Engineer",

    duration: "Technical Assessment",

    status: "Completed",

    industry: "Logistics & Transportation",

    database: "Shipment Datasets",

    github:
      "https://github.com/57KayBel0/freight-rate-prediction",

    live: "",

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

    overview:
      "Freight Rate Prediction is an end-to-end machine learning pipeline developed as part of a Machine Learning Engineer technical assessment. The system uses historical shipment data to predict freight transportation rates and includes data preprocessing, exploratory data analysis, feature engineering, model development, hyperparameter tuning, prediction generation, and validation.",

    problem:
      "Freight transportation rates vary according to factors such as shipment distance, equipment type, market conditions, and quote signals. The objective was to build a reproducible machine learning pipeline capable of predicting freight rates for unseen shipment requests while producing validated prediction files.",

    solution:
      "The project processes historical shipment data, handles missing values using median imputation based on the training dataset, engineers temporal, route, geographic, and interaction features, compares multiple regression models, and tunes the strongest model. The final solution uses a tuned CatBoost Regressor that outperformed the baseline Random Forest model and successfully passed the supplied validation script.",

    architecture: [
      "Historical Shipment Data",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Missing Value Imputation",
      "Temporal Feature Engineering",
      "Route Feature Engineering",
      "Geographic Feature Engineering",
      "Interaction Feature Engineering",
      "Random Forest Baseline",
      "CatBoost Regression",
      "Hyperparameter Tuning",
      "Prediction Generation",
      "Validation",
    ],

    metrics: [
      {
        label: "Final Model",
        value: "Tuned CatBoost",
      },
      {
        label: "MAE",
        value: "103.42",
      },
      {
        label: "RMSE",
        value: "526.10",
      },
      {
        label: "R²",
        value: "0.8706",
      },
    ],

    results: [
      "Built a reproducible end-to-end freight-rate prediction pipeline.",
      "Performed exploratory data analysis on historical shipment data.",
      "Created temporal features including year, month, day, weekday, week number, and weekend indicator.",
      "Created a combined Pickup → Delivery route feature.",
      "Engineered latitude and longitude difference features.",
      "Created interaction features including Distance Squared, Distance / Weight Ratio, Distance × Market Index, and Distance × Quote Signal.",
      "Established Random Forest as the baseline model with an R² of 0.8403.",
      "Improved performance using CatBoost with an R² of 0.8672.",
      "Achieved the best performance using the tuned CatBoost model with an R² of 0.8706.",
      "Generated predictions for 12,000 unseen validation shipments.",
      "Successfully validated 31 fixed December predictions.",
      "Generated the December freight-rate prediction visualization.",
    ],

    lessons: [
      "Feature engineering can significantly improve predictive performance on structured transportation data.",
      "Distance was identified as the strongest predictor of freight cost.",
      "Equipment type has a significant influence on freight pricing.",
      "Market Index and Quote Signal provide additional predictive information.",
      "CatBoost is effective for structured tabular datasets containing categorical variables.",
      "Hyperparameter tuning and early stopping improved the final model.",
      "Validation scripts provide an important safeguard for production-ready prediction outputs.",
    ],

    gallery: [
      "/images/projects/case-studies/Freight-Rate-Prediction/candidate_december.png",
      "/images/projects/case-studies/Freight-Rate-Prediction/info().png",
      "/images/projects/case-studies/Freight-Rate-Prediction/isnull.png",
      "/images/projects/case-studies/Freight-Rate-Prediction/predict.py.png",
      "/images/projects/case-studies/Freight-Rate-Prediction/scope.py.png",
      "/images/projects/case-studies/Freight-Rate-Prediction/train_chatboost_tuned.py.png",
      "/images/projects/case-studies/Freight-Rate-Prediction/train_groupby.png",

    ],
  },
  
  {
    
    id: 9,

    slug: "fuel-route-optimizer",

    title: "Fuel Route Optimizer",

    subtitle:
      "Django REST API that calculates optimal driving routes and recommends cost-effective fuel stops using OpenRouteService, Leaflet, and fuel-station data.",

    category: "Optimization & Logistics",

    featured: true,

    role: "Backend Software Engineer",

    duration: "3 Weeks",

    status: "Completed",

    industry: "Logistics & Transportation",

    database: "SQLite",

    github:
      "https://github.com/57KayBel0/fuel-route-optimizer",

    live: "",

    technologies: [
      "Python 3.12",
      "Django 4.2",
      "Django REST Framework",
      "JavaScript",
      "Leaflet.js",
      "OpenRouteService",
      "SQLite",
      "Docker",
      "Geopy",
      "Polyline",
      "REST API",
    ],

    overview:
      "Fuel Route Optimizer is a Django REST API application that calculates driving routes between two locations and recommends cost-effective fuel stops along the journey. The application integrates OpenRouteService for route generation, uses a local database of fuel stations, and provides an interactive Leaflet map for visualizing the trip.",

    problem:
      "Long-distance trips require drivers and fleet operators to consider route distance, vehicle range, fuel consumption, fuel prices, and suitable refueling locations. Manually determining efficient fuel stops can make trip planning more difficult and increase fuel costs.",

    solution:
      "The application calculates the driving route, determines refueling checkpoints based on vehicle range, searches for nearby fuel stations, selects the cheapest suitable station, estimates the fuel required, and calculates the total trip fuel cost. The resulting route and fuel stops can be visualized through an interactive map.",

    architecture: [
      "Django REST API",
      "Address Geocoding",
      "OpenRouteService",
      "Route Calculation",
      "Fuel Station Database",
      "Fuel Stop Optimization",
      "Fuel Consumption Estimation",
      "Fuel Cost Calculation",
      "Leaflet Map Visualization",
      "Django Route Cache",
      "Docker",
    ],

    metrics: [
      {
        label: "Backend",
        value: "Django REST",
      },
      {
        label: "Routing",
        value: "OpenRouteService",
      },
      {
        label: "Mapping",
        value: "Leaflet",
      },
      {
        label: "Vehicle Range",
        value: "500 Miles",
      },
    ],

    results: [
      "Implemented route calculation between US locations.",
      "Implemented fuel-stop recommendations based on vehicle range.",
      "Added cheapest nearby fuel-station selection.",
      "Implemented fuel-consumption estimation.",
      "Implemented total fuel-cost estimation.",
      "Added interactive Leaflet route visualization.",
      "Added animated route drawing and start/destination markers.",
      "Implemented route caching to improve repeated-request performance.",
      "Added Docker support.",
      "Successfully tested multiple long-distance routes.",
    ],

    lessons: [
      "Routing APIs can simplify the development of geospatial applications.",
      "Fuel-price data can be combined with route information to improve transportation planning.",
      "Caching can improve performance for repeated route requests.",
      "Interactive mapping makes logistics applications easier to understand.",
      "Separating routing, fuel-station selection, and cost calculations creates a maintainable application architecture.",
    ],

    gallery: [
      "/images/projects/fuel-route.png",
      "/images/projects/case-studies/Fuel-Route-Optimizer/left_screen_only_121.png",
      "/images/projects/case-studies/Fuel-Route-Optimizer/left_screen_only_122.png",

    ],
  },
]
export default caseStudies;