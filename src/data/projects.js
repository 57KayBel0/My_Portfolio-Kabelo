const projects = [
  {
    id: 1,
    slug: "health-insurance-etl",
    featured: true,
    title: "Health Insurance ETL Pipeline",
    category: "Data Engineering",

    description:
      "Designed and implemented an end-to-end ETL pipeline that ingests healthcare insurance datasets, transforms the data, loads it into PostgreSQL, and models it using dbt for analytics.",

    image: "/images/projects/health-insurance-etl-cover.png",

    github:
      "https://github.com/57KayBel0/Data_Engineering_Assessment.KM",

    demo: "",

    technologies: [
      "Python",
      "AWS",
      "PostgreSQL",
      "Docker",
      "dbt",
      "SQL",
      "Pandas",
    ],
  },

  {

    id: 2,
    slug: "loan-eligibility-prediction",
    featured: true,
    title: "Loan Eligibility Prediction",
    category: "Machine Learning",

    description:
      "Built a machine learning model that predicts loan approvals using classification algorithms, feature engineering, and exploratory data analysis.",

    image: "/images/projects/loan.png",

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects/tree/master/Loan-Eligibility-Prediction",

    demo: "",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    id: 3,
    slug: "movie-ratings-analysis",
    featured: true,
    title: "Movie Ratings Analysis",
    category: "Data Analysis",

    description:
      "Performed exploratory data analysis on the MovieLens dataset to identify trends in user ratings, genres, and movie popularity.",

    image: "/images/projects/movie.png",

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects/tree/master/Movie-Ratings-Analysis",

    demo: "",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    id: 4,
    slug: "smart-truck-route-planner",
    featured: true,
    title: "Smart Truck Route Planner",
    category: "Full Stack Development",

    description:
      "Developed a full-stack logistics application that optimizes truck routes while supporting FMCSA Hours of Service regulations, interactive maps, and trip management.",

    image: "/images/projects/truck.png",

    github:
      "https://github.com/57KayBel0/SmartTruck-Route-Planner",

    demo: "https://smart-truck-route-planner.vercel.app/",

    technologies: [
      "React",
      "Next.js",
      "Django",
      "Python",
      "PostgreSQL",
      "REST API",
      "Leaflet",
    ],
  },

  {
    id: 5,
    slug: "bank-fraud-detection",
    featured: true,

    title: "Bank Fraud Detection Platform",

    category: "Machine Learning",

    description:
      "AI-powered full-stack fraud detection platform that analyses financial transactions using XGBoost and provides real-time predictions, analytics, alerts, transaction history, and model monitoring through an interactive React dashboard.",

    image:
      "/images/projects/case-studies/Back-Fraud-dectection/Bank-Fraud-Detection Cover.png",

    github:
      "https://github.com/57KayBel0/Bank-Fraud-Detection",

    demo:
      "https://bank-fraud-detection-five.vercel.app/",

    technologies: [
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "XGBoost",
      "Tailwind CSS",
      "Recharts",
      "Axios",
    ],
  },

  {
    id: 6,
    slug: "iris-data-exploration",
    featured: true,
    title: "Iris Data Exploration",
    category: "Data Analysis",

    description:
      "Conducted exploratory data analysis on the Iris dataset using statistical techniques and visualizations to understand feature relationships and species characteristics.",

    image: "/images/projects/iris.png",

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects/tree/master/Iris-Data-Exploration",

    demo: "",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
  },

  {
    id: 7,
    slug: "breast-cancer-model-evaluation",
    featured: true,
    title: "Breast Cancer Model Evaluation",
    category: "Machine Learning",

    description:
      "Evaluated multiple machine learning classification models on the Breast Cancer Wisconsin dataset using performance metrics and visualization techniques.",

    image: "/images/projects/breast-cancer.png",

    github:
      "https://github.com/57KayBel0/HexSoftwares_Projects/tree/master/Model-Evaluation-Classification",

    demo: "",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    id: 8,
    slug: "freight-rate-prediction",
    featured: true,
    title: "Freight Rate Prediction",
    category: "Machine Learning",

    description:
      "Developed a machine learning regression model that predicts freight shipping rates using logistics and transportation features to improve cost estimation and pricing decisions.",

    image: "/images/projects/freight-rate.png",

    github:
      "https://github.com/57KayBel0/freight-rate-prediction",

    demo: "",

    technologies: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "NumPy",
      "Matplotlib",
      "Regression",
    ],
  },

  {
    id: 9,
    slug: "fuel-route-optimizer",
    featured: true,
    title: "Fuel Route Optimizer",
    category: "Optimization & Logistics",

    description:
      "Built a logistics optimization application that calculates fuel-efficient delivery routes, helping reduce travel distance, fuel consumption, and transportation costs.",

    image: "/images/projects/fuel-route.png",

    github:
      "https://github.com/57KayBel0/fuel-route-optimizer",

    demo: "",

    technologies: [
      "Python",
      "React",
      "Optimization",
      "Logistics",
      "Routing",
      "Data Visualization",
    ],
  }
];

export default projects;