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
    title: "Bank Fraud Detection",
    category: "Machine Learning",

    description:
      "Designed a machine learning solution to identify potentially fraudulent financial transactions using predictive analytics and classification techniques.",

    image: "/images/projects/fraud.png",

    github:
      "https://github.com/57KayBel0/Bank-Fraud-Detection",

    demo: "https://your-vercel-url.vercel.app",

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
];

export default projects;