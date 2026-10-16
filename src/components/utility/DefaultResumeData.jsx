const DefaultResumeData = {
  name: "JUAN PABLO ZÚÑIGA HIDALGO",
  position: "AI Engineer & Senior Solutions Architect",
  contactInformation: "+46 72 997 1641",
  email: "juanpablo.zunigah@gmail.com",
  address: "Göteborg, Sweden",
  profilePicture: "/profile.jpg",
  profilePicturePosition: {
    x: 50,
    y: 50,
    zoom: 1,
  },
  socialMedia: [
    {
      socialMedia: "Website",
      link: "https://zunigajp.com/",
    },
    {
      socialMedia: "LinkedIn",
      link: "https://linkedin.com/in/jpzuniga",
    },
    {
      socialMedia: "Github",
      link: "https://github.com/juanpablozunigahidalgo",
    },
  ],
  summary:
    "Mechanical Engineer (MSc) and MSc in Management and Economics of Innovation (Chalmers University of Technology) with expertise in generative AI, LLM integration, full-stack software development, data analytics, and cloud architecture. Strong track record organizing work and collaborating across technical and business teams, with clear communication in both domains. Targeting Senior AI Solutions Architect, Business Analyst, Process Improvement Engineer, or Designer roles at the intersection of heavy engineering and digital/smart solutions.",
  education: [
    {
      school: "Chalmers University of Technology",
      degree: "MSc, Management and Economics of Innovation",
      startYear: "2013-08-01",
      endYear: "2015-06-15",
    },
    {
      school: "Universidad Técnica Federico Santa María",
      degree: "MSc & BSc, Mechanical Engineering",
      startYear: "2006-03-01",
      endYear: "2011-12-15",
    },
  ],
  workExperience: [
    {
      company: "Experimentar.eu",
      position: "AI Engineer & Senior Solutions Architect",
      description:
        "Initiated and currently leads an applied AI laboratory dedicated to prototyping enterprise-grade solutions using cloud and generative AI technologies.",
      keyAchievements:
        "Engineered a web-based AI Banking Agent for Danske Bank to onboard users with zero friction and handle complex loan inquiries. Implemented a fully serverless, stateless verification flow that registers users via ID image recognition, orchestrated through Amazon Bedrock Agents and AWS Lambda, with storage on Amazon S3 and DynamoDB under least-privilege AWS IAM policies.\nEngineered an LLMOps pipeline for Redcare Pharmacy using MLflow and Prefect to streamline ML model governance and deployment.\nDeveloped a retail forecasting engine for IKEA powered by Long Short-Term Memory (LSTM) networks and Astro (Islands Architecture), along with a robust AWS Fraud Detection framework.\nCurrently engineering Gettashower, a Flutter, Dart, and Supabase-based mobile application connecting urban users with shower nodes and lockers in high-traffic cities globally.",
      tools:
        "Amazon Bedrock (Agents), AWS Lambda, Amazon DynamoDB, Amazon S3, AWS IAM, AWS Bedrock Runtime, Flutter, Supabase, React, OpenAI API, TypeScript, Gemini AI, Google Cloud, Astro, Python, FastAPI, MLflow, Docker",
      startYear: "2025-07-01",
      endYear: "",
    },
    {
      company: "Oracle EU",
      position: "Generative AI Services Specialist",
      description:
        "Helped enterprise organizations modernize applications and business processes through Oracle AI technologies and cloud infrastructure.",
      keyAchievements:
        "Bridged complex business requirements with technological capabilities, delivering AI-driven solutions that improved executive decision-making and operational efficiency across multiple industries.\nAnalyzed business challenges, designed custom AI service architectures, and deployed Oracle Cloud Infrastructure (OCI) AI models, including Oracle Digital Assistant and OCI AI Services (Document Understanding, Language, Vision, and Speech).\nProvided technical guidance for model training, deployment, and integration with RAG-based agents, LangChain, and LLMs to ensure interoperability with legacy client systems.",
      tools:
        "Oracle Cloud Infrastructure (OCI), Oracle AI Services, Oracle Generative AI, Oracle Digital Assistant, Oracle Autonomous Database, Oracle APEX, OCI Data Science, Python, Conda, TensorFlow, PyTorch, Jupyter, LangChain, LLM, RAG Agents, Trae AI, REST APIs, Postman, Open WebUI, Visual Studio Code, React, TypeScript, GitHub",
      startYear: "2024-12-01",
      endYear: "2025-06-30",
    },
    {
      company: "Upwork",
      position: "IT Consultant – Programming and Design",
      description:
        "Provided end-to-end development support for two early-stage startups in the healthcare and food sectors, from conception to deployment.",
      keyAchievements:
        "Designed high-fidelity Figma prototypes and implemented full-stack solutions using React with TypeScript.\nIntegrated Google Firebase for real-time data management and user authentication, utilizing React Redux for state management and REST APIs to ingest external Open APIs.\nDeveloped custom OpenAI web-based applications, including an AI-based machine failure diagnostic tool for trucks and map-based geolocation solutions using Google Maps APIs.",
      tools:
        "Figma, GitHub Pages, Google Cloud, Google Firebase, OpenAI API, Amadeus API, React, Node.js, TypeScript, Google Maps API, MUI",
      startYear: "2024-08-01",
      endYear: "2024-11-30",
    },
    {
      company: "Antler",
      position: "Founder in Residence",
      description:
        "Participated in the competitive Antler Entrepreneur Innovation Program alongside international entrepreneurs in a high-pressure startup accelerator.",
      keyAchievements:
        "Excelled in cross-functional team formation and technical development of digital solutions, including mobile applications and web platforms.\nValidated product-market fit for digital products and services through market research and business proposals presented to venture capital investors.\nSpearheaded rapid sprint idea generation for tech ventures spanning insurance, construction, and healthcare.",
      tools:
        "Figma, Flutter, GitHub Pages, Google Cloud, Google Firebase, Vertex AI, Canva, React, Node.js, TypeScript, Google Maps API, MUI",
      startYear: "2023-08-01",
      endYear: "2023-11-30",
    },
    {
      company: "Antler",
      position: "Cohort Preparation",
      description:
        "Completed technical preparations for the Antler Incubator Program, including migration of tourismcycling.com to a modern React TypeScript stack.",
      keyAchievements:
        "Migrated https://www.tourismcycling.com to React and TypeScript.\nUtilized MUI libraries for optimized UI/UX design and deployed the website via GitHub Pages.\nIntegrated Auth0 login for user authentication and Google Analytics for performance monitoring and traffic tracking.",
      tools:
        "Google Cloud, Amazon Education, GitHub Pages, React, TypeScript, Auth0, Google Analytics, Google Maps API, MUI",
      startYear: "2023-04-01",
      endYear: "2023-08-31",
    },
    {
      company: "Lynk & Co",
      position: "Full Stack Developer",
      description:
        "Developed a maintenance toolbox platform for workshop technicians using React and TypeScript in an Azure cloud environment.",
      keyAchievements:
        "Collaborated with business analysts and UX designers to ensure system functionality and high usability.\nImplemented Microsoft SSO authentication to enhance system security and user accessibility, integrating multiple Lynk & Co Cosmos APIs.\nSupported the EC APP system migration to React TypeScript on Azure, ensuring high availability and continuous deployment.",
      tools:
        "React, Node.js, JavaScript, TypeScript, HTML5, CSS, Azure, Microsoft SSO, Git, Visual Studio, Postman, GitHub Copilot, Azure Portal, Azure DevOps, Azure Pipelines, Azure Repos, Azure Wiki, Microsoft Office, Miro",
      startYear: "2022-09-01",
      endYear: "2023-03-31",
    },
    {
      company: "CGI",
      position: "Java Full-Stack Bootcamp",
      description:
        "Completed an intensive Java bootcamp focused on enterprise full-stack development, software engineering discipline, and CI/CD practices.",
      keyAchievements:
        "Built microservices using Spring Boot, Angular, and Java; tested and deployed front-end and back-end Single Page Applications (SPAs) and RESTful APIs.\nConfigured CI/CD pipelines and deployed cloud applications on Amazon Web Services (AWS) using Docker containers.\nContributed to a fully functional job application portal, covering Java backend technologies and database design.",
      tools:
        "Visual Studio, Spring Boot, IntelliJ, MS Office, GitHub, Angular, MySQL, MongoDB, Docker, Swagger, Mockito, Amazon Web Services (AWS), Draw.io, Java, TypeScript, HTML, CSS, SQL",
      startYear: "2022-03-01",
      endYear: "2022-08-31",
    },
    {
      company: "Upwork",
      position: "Analytics-Programming Consultant",
      description:
        "Specialized in Business Intelligence programming and financial analytics, delivering customized data solutions to global clients.",
      keyAchievements:
        "Managed end-to-end consulting engagements: crafted project proposals, defined technical scopes, and monitored delivery against timelines.\nDeveloped analytical dashboards, backend data programs, defined data architecture, and conducted complex financial analyses using Power BI and Power Automate.",
      tools: "Power BI, DAX, Power Automate, GitHub Pages, Visual Studio, MS Office",
      startYear: "2021-03-01",
      endYear: "2022-03-31",
    },
    {
      company: "Tourism Cycling",
      position: "Creative Producer & Lead Developer",
      description:
        "Created an open-source platform (https://www.tourismcycling.com) to help touring cyclists worldwide with trip planning and logistics.",
      keyAchievements:
        "Developed a digital platform that automatically generates cycling routes while calculating financial costs and trip duration.\nProgrammed automated equipment recommendation logic based on trip duration, weather conditions, and camping availability.\nMaintained an open-source codebase on GitHub to encourage global developer contributions, hosting infrastructure on Amazon Web Services (AWS).",
      tools:
        "Atom, GitHub, GitHub Pages, Amazon Web Services (AWS), Google Domains, HTML, CSS, JavaScript, Java",
      startYear: "2020-09-01",
      endYear: "2021-02-28",
    },
    {
      company: "Volvo Trucks Technology",
      position: "Finance Project Manager",
      description:
        "Managed financial planning and budget forecasting for R&D engineering projects across commodities and global departments.",
      keyAchievements:
        "Compiled and analyzed business cases to ensure precise financial planning, cost forecasting, and risk evaluation.\nDeveloped operational automation tools using Microsoft Flow, Power BI, and Windows 365 to streamline financial reporting and process efficiency.\nOversaw financial management for projects spanning smart vehicle diagnostic solutions, software security, mechanical innovations, and maintenance improvements.",
      tools:
        "SAP, SAP Business Analyzer, MS Office, Excel Macros, Profitability Evaluation Tool, Power BI, Microsoft Flow",
      startYear: "2017-01-01",
      endYear: "2019-12-31",
    },
    {
      company: "Volvo Trucks Technology",
      position: "Intern – Finance Project Manager",
      description:
        "Provided financial management, business case analysis, and budget control support for IT projects within Volvo Trucks Technology.",
      keyAchievements:
        "Improved education and onboarding programs for incoming Finance Project Managers, consolidating essential financial tools and knowledge.\nDeveloped Excel macro-based programs (VBA) to automate manual tracking tasks and streamline project monitoring and reporting.",
      tools:
        "SAP, SAP Business Analyzer, MS Office, Excel Macros, VBA, Profitability Evaluation Tool",
      startYear: "2016-04-01",
      endYear: "2016-10-31",
    },
    {
      company: "SKF AB",
      position: "Global Market Research (Master's Thesis)",
      description:
        "Led a global market research initiative focused on industrial seals across industries and continents as part of a Master's thesis.",
      keyAchievements:
        "Applied market analysis techniques to estimate market size and identify long-term strategic growth opportunities for SKF industrial seals.\nSynthesized qualitative and quantitative insights from over 50 global sales and market managers to define competitive landscape positioning.",
      tools: "MS Office, Advanced Excel",
      startYear: "2014-09-01",
      endYear: "2015-01-31",
    },
    {
      company: "Anglo American",
      position: "Mechanical Engineer",
      description:
        "Oversaw production and maintenance performance for open-pit mining fleets, mineral processing plants, and conveyor belt systems across multiple mine sites.",
      keyAchievements:
        "Implemented maintenance management optimization initiatives to increase industrial equipment uptime and operational reliability.\nLed an engineering study evaluating the renewal of a mining truck fleet, implementing financial and mechanical models that resulted in cost savings exceeding $20 Million USD.",
      tools:
        "MS Office, Excel, SAP Logistics, SAP Maintenance, Caterpillar Maintenance Modules, Festo Automation",
      startYear: "2012-01-01",
      endYear: "2013-07-31",
    },
    {
      company: "Universidad Técnica Federico Santa María",
      position: "Assistant Professor",
      description:
        "Facilitated learning in core engineering disciplines including Heat Transfer, Thermodynamics, and Modern Physics.",
      keyAchievements:
        "Designed exercise classes, exams, and computational laboratory experiments using engineering modeling software such as Matlab, Mathematica, and Inventor.",
      tools: "Matlab, Mathematica, Wolfram, Inventor, Phoenix Fluid, MS Office, Fortran",
      startYear: "2008-06-01",
      endYear: "2011-06-30",
    },
    {
      company: "Bechtel Corporation",
      position: "Engineering Support",
      description:
        "Contributed to engineering execution of major mining and energy infrastructure projects in South America.",
      keyAchievements:
        "Developed complex hydraulic networks for the Las Bambas mining project in Peru, collaborating with multidisciplinary engineering teams.",
      tools: "MS Office, Bechtel Hydraulics, Inventor Autodesk",
      startYear: "2011-01-01",
      endYear: "2011-02-28",
    },
    {
      company: "Codelco",
      position: "Engineering Support",
      description:
        "Improved preventative maintenance procedures for large industrial mining equipment for the world's largest copper producer.",
      keyAchievements:
        "Applied reliability models based on Weibull regression and real-time operational data to enhance heavy equipment performance and maintenance cycles.",
      tools: "MS Office, Advanced Excel, SAP",
      startYear: "2008-01-01",
      endYear: "2008-02-29",
    },
  ],
  projects: [],
  skills: [
    {
      title: "Core Competencies",
      skills: [
        "Generative AI & LLM Integration",
        "Full-Stack Software Development",
        "Data Analytics & Business Intelligence",
        "Project & Finance Management",
        "Industrial & Mechanical Engineering",
        "Digital Strategy & Product Innovation",
        "Cloud Infrastructure & Process Automation",
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        "TypeScript",
        "Python",
        "Java",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Dart",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Node.js",
        "Angular",
        "Spring Boot",
        "Express",
        "Redux",
        "MUI",
        "FastAPI",
        "Astro",
        "Flutter",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "MongoDB",
        "Oracle Autonomous Database",
        "Firebase",
        "DynamoDB",
        "Supabase",
        "PostgreSQL",
      ],
    },
    {
      title: "Cloud & Platforms",
      skills: [
        "Oracle Cloud Infrastructure (OCI)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
        "Amazon Web Services (AWS)",
      ],
    },
    {
      title: "AI & Analytics",
      skills: [
        "OpenAI API",
        "Vertex AI",
        "LangChain",
        "RAG Agents",
        "OCI AI Services",
        "Amazon Bedrock",
        "MLflow",
        "Power BI",
        "DAX",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Auth0",
        "Docker",
        "CI/CD",
        "Figma",
        "Prefect",
        "Trae AI",
        "Open WebUI",
      ],
    },
    {
      title: "Other",
      skills: [
        "SAP",
        "Matlab",
        "Mathematica",
        "Inventor",
        "Excel",
        "MS Office",
        "Power Automate",
      ],
    },
  ],
  languages: [
    "Spanish — Native",
    "English — Fluent",
    "Swedish — Professional Working Proficiency",
    "Italian — Conversational",
  ],
  certifications: [
    "AWS Cloud Practitioner Essentials — Amazon Web Services (2026)",
    "Oracle Cloud Infrastructure 2025 Certified Architect Associate — Oracle (2025)",
    "Oracle Autonomous Database Cloud 2025 Certified Professional — Oracle (2025)",
    "Oracle APEX Cloud Developer Certified Professional — Oracle (2025)",
    "Oracle Cloud Infrastructure 2024 Generative AI Certified — Oracle (2025)",
    "Oracle Cloud Infrastructure 2024 Digital Assistant Certified — Oracle (2025)",
    "Oracle Cloud Infrastructure 2024 Certified AI Foundations — Oracle (2024)",
    "Nanodegree: Machine Learning Engineer with Azure — Udacity",
    "Nanodegree: Programming for Data Science, SQL, and Python — Udacity",
    "Machine Learning — Halmstad University (2023)",
    "AI Implementation — Halmstad University (2022)",
    "Java Full-Stack Bootcamp — CGI (2022)",
    "Android App Development — Udemy (2020)",
    "Full Stack Web Development — Codecademy (2019)",
  ],
};

export default DefaultResumeData;
