const caseStudies = [
  {
    id: 1,

    slug: "health-insurance-etl",

    title: "Health Insurance ETL Pipeline",

    subtitle:
      "Automated ETL pipeline for processing and transforming health insurance data into an analytics-ready warehouse.",

    category: "Data Engineering",

    featured: true,

    technologies: [
      "Python",
      "PostgreSQL",
      "Docker",
      "dbt",
      "Pandas",
      "SQL",
    ],

    github: "#",

    live: "",

    overview:
      "This project demonstrates a complete data engineering workflow that extracts raw health insurance datasets, cleans and validates the data, transforms it into a dimensional model, and loads it into PostgreSQL for analytics.",

    problem:
      "Insurance datasets often contain inconsistent records, duplicate values, missing information, and multiple file formats that make analysis difficult.",

    solution:
      "A Python ETL pipeline was developed to automate extraction, cleaning, validation, transformation, and loading of insurance data into a structured PostgreSQL warehouse.",

    architecture: [
      "Raw CSV Files",
      "Python ETL",
      "Data Validation",
      "PostgreSQL",
      "dbt Models",
      "Analytics",
    ],

    challenges: [
      "Cleaning inconsistent datasets",
      "Handling missing values",
      "Removing duplicate records",
      "Creating reusable ETL scripts",
      "Designing a dimensional warehouse",
    ],

    results: [
      "Automated ETL workflow",
      "Analytics-ready PostgreSQL database",
      "Improved data quality",
      "Reusable processing pipeline",
      "Star-schema data model",
    ],

    lessons: [
      "Importance of modular ETL design",
      "Value of data validation",
      "Benefits of database normalization",
      "Using dbt for transformation management",
    ],

    images: [
      "/images/projects/etl (1).png",
      "/images/projects/etl (2).png",
      "/images/projects/etl (3).png",
      "/images/projects/etl (4).png",
      "/images/projects/etl (5).png",
      "/images/projects/etl (6).png",
    ],
  },
];

export default caseStudies;