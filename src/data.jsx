const Data =  {
    "roles" :[
    {
        // "Full Stack Developer" role
  "id":1,
  "name": "Full Stack Developer",
  "description": "Master frontend, backend, and deployment using the MERN stack.",
  "skills_required": ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
  "skills_subtopics": {
    "HTML": {
      "explanation": "HTML is the foundation of all web pages, used to structure content.",
      "use_cases": "Defines layout and structure of websites.",
      "learn_link": "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    "CSS": {
      "explanation": "CSS styles HTML elements and creates responsive layouts.",
      "use_cases": "Used for responsive designs, animations, and UI layouts.",
      "learn_link": "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    "JavaScript": {
      "explanation": "JavaScript adds interactivity and logic to web applications.",
      "use_cases": "Used for client-side scripting, validations, and dynamic interfaces.",
      "learn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    "React": {
      "explanation": "React is a JS library for building interactive UIs using components.",
      "use_cases": "Used for building modern single-page applications (SPAs).",
      "learn_link": "https://reactjs.org/docs/getting-started.html"
    },
    "Node.js": {
      "explanation": "Node.js enables JavaScript to run on the server.",
      "use_cases": "Used to build scalable backend services and APIs.",
      "learn_link": "https://nodejs.dev/en/learn"
    },
    "MongoDB": {
      "explanation": "MongoDB is a NoSQL database used to store JSON-like documents.",
      "use_cases": "Used for storing structured/unstructured data in web apps.",
      "learn_link": "https://www.mongodb.com/docs/"
    },
    "Express": {
      "explanation": "Express is a backend web framework for Node.js.",
      "use_cases": "Used for routing, middleware, and RESTful APIs.",
      "learn_link": "https://expressjs.com/"
    }
  },
  "salary_range_inr": {
    "entry_level": 400000,
    "senior_level": 2500000
  },
  "estimated_days": 120
},
// "Python Developer"
{
  "id":2,
  "name": "Python Developer",
  "description": "Use Python for backend development, automation, and web apps.",
  "skills_required": ["Python", "OOP", "File Handling", "APIs", "Flask", "Django"],
  "skills_subtopics": {
    "Python": {
      "explanation": "Popular language for automation, backend, and data science.",
      "use_cases": "Used in scripting, data science, backend, and ML.",
      "learn_link": "https://docs.python.org/3/tutorial/"
    },
    "OOP": {
      "explanation": "Object-Oriented Programming helps structure complex code efficiently.",
      "use_cases": "Used to build scalable and maintainable applications.",
      "learn_link": "https://realpython.com/python3-object-oriented-programming/"
    },
    "File Handling": {
      "explanation": "Reading/writing files, working with paths and directories.",
      "use_cases": "Used in automation, log processing, and data pipelines.",
      "learn_link": "https://www.geeksforgeeks.org/file-handling-python/"
    }
  },
  "salary_range_inr": {
    "entry_level": 350000,
    "senior_level": 2000000
  },
  "estimated_days": 90
},
// "Java Developer"
{
  "id":3,
  "name": "Java Developer",
  "description": "Design and build scalable backend systems using Java and Spring.",
  "skills_required": ["Java", "OOP", "Collections", "Spring Boot", "JPA", "REST APIs"],
  "skills_subtopics": {
    "Java": {
      "explanation": "General-purpose, high-performance OOP language.",
      "use_cases": "Used in enterprise apps, Android, and backend systems.",
      "learn_link": "https://docs.oracle.com/javase/tutorial/"
    },
    "Spring Boot": {
      "explanation": "Java framework for building web apps and microservices.",
      "use_cases": "Used in REST API development and enterprise software.",
      "learn_link": "https://spring.io/projects/spring-boot"
    }
  },
  "salary_range_inr": {
    "entry_level": 400000,
    "senior_level": 2200000
  },
  "estimated_days": 120
},
// "Data Scientist"
{
  "id":4,
  "name": "Data Scientist",
  "description": "Analyze data and build ML models to extract insights and predictions.",
  "skills_required": ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Deep Learning"],
  "skills_subtopics": {
    "NumPy": {
      "explanation": "Library for efficient numerical computations using arrays.",
      "use_cases": "Used in data science pipelines for vectorized math operations.",
      "learn_link": "https://numpy.org/learn/"
    },
    "Pandas": {
      "explanation": "Python library for data manipulation and analysis.",
      "use_cases": "Used for cleaning, transforming, and analyzing datasets.",
      "learn_link": "https://pandas.pydata.org/docs/"
    },
    "Scikit-Learn": {
      "explanation": "Python library for machine learning models and tools.",
      "use_cases": "Used for training/testing models like regression or classification.",
      "learn_link": "https://scikit-learn.org/stable/tutorial/"
    }
  },
  "salary_range_inr": {
    "entry_level": 500000,
    "senior_level": 3500000
  },
  "estimated_days": 150
},
// "AI Developer"
{
  "id":5,
  "name": "AI Developer",
  "description": "Develop intelligent systems using machine learning and deep learning.",
  "skills_required": ["Python", "ML", "Deep Learning", "NLP", "TensorFlow", "Keras"],
  "skills_subtopics": {
    "Deep Learning": {
      "explanation": "Subset of ML using neural networks with multiple layers.",
      "use_cases": "Used in image recognition, speech processing, and more.",
      "learn_link": "https://www.deeplearning.ai/"
    },
    "TensorFlow": {
      "explanation": "Google’s deep learning framework for large-scale ML apps.",
      "use_cases": "Used to train and deploy deep learning models.",
      "learn_link": "https://www.tensorflow.org/learn"
    },
    "NLP": {
      "explanation": "Field focused on enabling computers to understand human language.",
      "use_cases": "Used in chatbots, language translation, and sentiment analysis.",
      "learn_link": "https://www.coursera.org/learn/language-processing"
    }
  },
  "salary_range_inr": {
    "entry_level": 600000,
    "senior_level": 4000000
  },
  "estimated_days": 180
},
// "Machine Learning Engineer"
{
  "id":6,
  "name": "Machine Learning Engineer",
  "description": "Build production-ready ML pipelines and deploy models at scale.",
  "skills_required": ["Python", "ML", "Data processing", "Model Evaluation", "TensorFlow", "MLOps"],
  "skills_subtopics": {
    "Model Evaluation": {
      "explanation": "Assess the performance of ML models using metrics.",
      "use_cases": "Used to choose the best model for deployment.",
      "learn_link": "https://scikit-learn.org/stable/modules/model_evaluation.html"
    },
    "MLOps": {
      "explanation": "Set of practices to deploy and maintain ML models in production.",
      "use_cases": "Used in automating ML lifecycle, from training to monitoring.",
      "learn_link": "https://ml-ops.org/"
    }
  },
  "salary_range_inr": {
    "entry_level": 550000,
    "senior_level": 3800000
  },
  "estimated_days": 160
},
// "Data Analyst"
{
  "id":7,
  "name": "Data Analyst",
  "description": "Collect, clean, analyze, and visualize data to support business decisions.",
  "skills_required": ["Excel", "SQL", "Python", "Pandas", "Power BI", "Tableau"],
  "skills_subtopics": {
    "Excel": {
      "explanation": "Spreadsheet tool for analyzing tabular data using formulas and charts.",
      "use_cases": "Used for quick calculations and visualization in business reports.",
      "learn_link": "https://exceljet.net/"
    },
    "Power BI": {
      "explanation": "Microsoft’s business analytics tool for creating dashboards.",
      "use_cases": "Used in real-time reporting and enterprise visual analytics.",
      "learn_link": "https://learn.microsoft.com/en-us/power-bi/"
    }
  },
  "salary_range_inr": {
    "entry_level": 400000,
    "senior_level": 1600000
  },
  "estimated_days": 100
},
// "Cloud Engineer"
{
  "id":8,
  "name": "Cloud Engineer",
  "description": "Design and manage cloud infrastructure using AWS, Azure, or GCP.",
  "skills_required": ["AWS", "Azure", "Linux", "Networking", "CI/CD", "Terraform"],
  "skills_subtopics": {
    "AWS": {
      "explanation": "Amazon Web Services – cloud platform with storage, compute, and AI services.",
      "use_cases": "Used for scalable application deployment and hosting.",
      "learn_link": "https://aws.amazon.com/training/"
    },
    "Terraform": {
      "explanation": "Infrastructure-as-code tool to automate cloud resource provisioning.",
      "use_cases": "Used to manage cloud resources via declarative config files.",
      "learn_link": "https://developer.hashicorp.com/terraform/docs"
    }
  },
  "salary_range_inr": {
    "entry_level": 500000,
    "senior_level": 3000000
  },
  "estimated_days": 140
},
// "DevOps Engineer"
{
  "id":9,
  "name": "DevOps Engineer",
  "description": "Automate infrastructure, CI/CD pipelines, and software delivery lifecycle.",
  "skills_required": ["Linux", "Git", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
  "skills_subtopics": {
    "Docker": {
      "explanation": "Container platform for packaging applications and dependencies.",
      "use_cases": "Used to run microservices and portable dev environments.",
      "learn_link": "https://docs.docker.com/get-started/"
    },
    "Kubernetes": {
      "explanation": "Open-source system for managing containerized apps at scale.",
      "use_cases": "Used in cloud-native deployments for orchestration.",
      "learn_link": "https://kubernetes.io/docs/home/"
    },
    "CI/CD": {
      "explanation": "Continuous Integration/Deployment helps automate code testing and delivery.",
      "use_cases": "Used in modern DevOps pipelines to speed up development.",
      "learn_link": "https://www.redhat.com/en/topics/devops/what-is-ci-cd"
    }
  },
  "salary_range_inr": {
    "entry_level": 550000,
    "senior_level": 3000000
  },
  "estimated_days": 150
},
// "Cybersecurity Analyst"
{
  "id":10,
  "name": "Cybersecurity Analyst",
  "description": "Protect systems and networks from security breaches and threats.",
  "skills_required": ["Networking", "Linux", "Firewalls", "Ethical Hacking", "OWASP", "SIEM"],
  "skills_subtopics": {
    "Ethical Hacking": {
      "explanation": "Ethical hacking tests systems for vulnerabilities.",
      "use_cases": "Used to simulate attacks and improve defenses.",
      "learn_link": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
    },
    "OWASP": {
      "explanation": "A list of the top vulnerabilities in web applications.",
      "use_cases": "Used as a checklist to ensure secure web development.",
      "learn_link": "https://owasp.org/www-project-top-ten/"
    }
  },
  "salary_range_inr": {
    "entry_level": 450000,
    "senior_level": 3000000
  },
  "estimated_days": 140
},
// "Blockchain Developer"
{
  "id":11,
  "name": "Blockchain Developer",
  "description": "Develop decentralized apps (dApps) and smart contracts on blockchain networks.",
  "skills_required": ["Solidity", "Ethereum", "Smart .Con", "Web3.js", "Cryptography", "Truffle"],
  "skills_subtopics": {
    "Solidity": {
      "explanation": "Programming language for writing smart contracts on Ethereum.",
      "use_cases": "Used to build dApps and DeFi protocols.",
      "learn_link": "https://soliditylang.org/"
    },
    "Web3.js": {
      "explanation": "Library to interact with Ethereum blockchain from JS apps.",
      "use_cases": "Used in frontend integration with smart contracts.",
      "learn_link": "https://web3js.readthedocs.io/"
    }
  },
  "salary_range_inr": {
    "entry_level": 600000,
    "senior_level": 3500000
  },
  "estimated_days": 160
},
// "Frontend Developer"
{
  "id":12,
  "name": "Frontend Developer",
  "description": "Build user-friendly web interfaces using modern frontend technologies.",
  "skills_required": ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Resp. Design"],
  "skills_subtopics": {
    "TypeScript": {
      "explanation": "TypeScript is a typed superset of JavaScript for large-scale apps.",
      "use_cases": "Used to improve code safety and scalability.",
      "learn_link": "https://www.typescriptlang.org/docs/"
    },
    "Responsive Design": {
      "explanation": "Technique to make web pages look good on all screen sizes.",
      "use_cases": "Essential for mobile-friendly websites.",
      "learn_link": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
    },
    "HTML": {
      "explanation": "HTML is the foundation of all web pages, used to structure content.",
      "use_cases": "Defines layout and structure of websites.",
      "learn_link": "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    "CSS": {
      "explanation": "CSS styles HTML elements and creates responsive layouts.",
      "use_cases": "Used for responsive designs, animations, and UI layouts.",
      "learn_link": "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    "JavaScript": {
      "explanation": "JavaScript adds interactivity and logic to web applications.",
      "use_cases": "Used for client-side scripting, validations, and dynamic interfaces.",
      "learn_link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    "React": {
      "explanation": "React is a JS library for building interactive UIs using components.",
      "use_cases": "Used for building modern single-page applications (SPAs).",
      "learn_link": "https://reactjs.org/docs/getting-started.html"
    }
  },
  "salary_range_inr": {
    "entry_level": 350000,
    "senior_level": 1800000
  },
  "estimated_days": 100
},
// "Backend Developer"
{
  "id":13,
  "name": "Backend Developer",
  "description": "Develop server-side applications, manage databases, and build APIs.",
  "skills_required": ["Node.js", "Express", "MongoDB", "SQL", "Authentication", "REST APIs"],
  "skills_subtopics": {
    "SQL": {
      "explanation": "Structured Query Language used to interact with relational databases.",
      "use_cases": "Used to store and manage user or transactional data.",
      "learn_link": "https://www.w3schools.com/sql/"
    },
    "Authentication": {
      "explanation": "Process of verifying user identity in web applications.",
      "use_cases": "Used in login systems and secure access control.",
      "learn_link": "https://auth0.com/docs"
    }
  },
  "salary_range_inr": {
    "entry_level": 400000,
    "senior_level": 2000000
  },
  "estimated_days": 110
},
// "Mobile App Developer"
{
  "id":14,
  "name": "Mobile App Developer",
  "description": "Build native and cross-platform mobile applications.",
  "skills_required": ["Dart", "Flutter", "React Native", "Firebase", "APIs", "UI/UX"],
  "skills_subtopics": {
    "Flutter": {
      "explanation": "Open-source SDK to build natively compiled apps using Dart.",
      "use_cases": "Used for building cross-platform mobile applications.",
      "learn_link": "https://flutter.dev/"
    },
    "Firebase": {
      "explanation": "Google's backend-as-a-service for mobile and web apps.",
      "use_cases": "Used for real-time databases, auth, hosting.",
      "learn_link": "https://firebase.google.com/"
    }
  },
  "salary_range_inr": {
    "entry_level": 400000,
    "senior_level": 1800000
  },
  "estimated_days": 100
},
// "Flutter Developer"
{
  "id":15,
  "name": "Flutter Developer",
  "description": "Develop beautiful cross-platform mobile apps using Dart and Flutter.",
  "skills_required": ["Dart", "Flutter", "State .Mng", "APIs", "Firebase", "Animations"],
  "skills_subtopics": {
    "Dart": {
      "explanation": "A client-optimized language for fast apps on any platform.",
      "use_cases": "Used with Flutter for mobile, web, and desktop apps.",
      "learn_link": "https://dart.dev/"
    },
    "Animations": {
      "explanation": "Enhance user experience with smooth transitions and effects.",
      "use_cases": "Used to add interactivity and polish to apps.",
      "learn_link": "https://flutter.dev/docs/development/ui/animations"
    }
  },
  "salary_range_inr": {
    "entry_level": 400000,
    "senior_level": 2000000
  },
  "estimated_days": 110
},
// "React Native Developer"
{
  "id":16,
  "name": "React Native Developer",
  "description": "Build cross-platform mobile apps using JavaScript and React Native.",
  "skills_required": ["JavaScript", "React Native", "APIs", "Redux", "Navigation", "UI Comps"],
  "skills_subtopics": {
    "React Native": {
      "explanation": "A framework for building native apps using React.",
      "use_cases": "Used for iOS/Android app development from a single codebase.",
      "learn_link": "https://reactnative.dev/docs/getting-started"
    },
    "Redux": {
      "explanation": "A predictable state container for JavaScript apps.",
      "use_cases": "Used for managing global state in mobile apps.",
      "learn_link": "https://redux.js.org/"
    }
  },
  "salary_range_inr": {
    "entry_level": 400000,
    "senior_level": 2200000
  },
  "estimated_days": 100
},
// "QA Engineer"
{
  "id":17,
  "name": "QA Engineer",
  "description": "Ensure software quality through manual and automated testing.",
  "skills_required": ["Manual Testing", "Automation", "Selenium", "Test Cases", "Jest", "Postman"],
  "skills_subtopics": {
    "Selenium": {
      "explanation": "Automation tool for testing web apps across browsers.",
      "use_cases": "Used for browser-based automation and UI tests.",
      "learn_link": "https://www.selenium.dev/documentation/"
    },
    "Jest": {
      "explanation": "JavaScript testing framework for unit and integration testing.",
      "use_cases": "Used to test frontend components in React and JS apps.",
      "learn_link": "https://jestjs.io/docs/getting-started"
    }
  },
  "salary_range_inr": {
    "entry_level": 350000,
    "senior_level": 1500000
  },
  "estimated_days": 90
},
// "UI/UX Designer"
{
  "id":18,
  "name": "UI/UX Designer",
  "description": "Design intuitive, user-friendly, and attractive interfaces for applications.",
  "skills_required": ["Figma", "Wireframing", "Prototyping", "User Research", "Design Sys", "Accessibility"],
  "skills_subtopics": {
    "Figma": {
      "explanation": "A collaborative design tool for interface design and prototyping.",
      "use_cases": "Used to design app UIs and collaborate with developers.",
      "learn_link": "https://www.figma.com/learn/"
    },
    "Accessibility": {
      "explanation": "Designing interfaces that are usable by people with disabilities.",
      "use_cases": "Used to meet WCAG compliance and inclusive design.",
      "learn_link": "https://www.w3.org/WAI/fundamentals/accessibility-intro/"
    }
  },
  "salary_range_inr": {
    "entry_level": 350000,
    "senior_level": 1800000
  },
  "estimated_days": 80
},
// "Game Developer"
{
  "id":19,
  "name": "Game Developer",
  "description": "Create 2D/3D games using engines like Unity or Unreal.",
  "skills_required": ["C#", "Unity", "Game Physics", "3D Modeling", "Animation", "Shaders"],
  "skills_subtopics": {
    "Unity": {
      "explanation": "A powerful engine for 2D/3D game development using C#.",
      "use_cases": "Used in mobile, PC, and console game development.",
      "learn_link": "https://learn.unity.com/"
    },
    "Shaders": {
      "explanation": "Scripts that determine the visual effects of objects in games.",
      "use_cases": "Used for lighting, shadows, and visual effects.",
      "learn_link": "https://www.ronja-tutorials.com/"
    }
  },
  "salary_range_inr": {
    "entry_level": 400000,
    "senior_level": 3000000
  },
  "estimated_days": 150
},
// "AR/VR Developer"
{
  "id":20,
  "name": "AR/VR Developer",
  "description": "Create immersive augmented and virtual reality experiences.",
  "skills_required": ["Unity", "C#", "3D Modeling", "VR SDKs", "ARKit", "ARCore"],
  "skills_subtopics": {
    "ARKit / ARCore": {
      "explanation": "SDKs for building AR apps for iOS and Android devices.",
      "use_cases": "Used in apps like Pokémon Go or Ikea Place.",
      "learn_link": "https://developers.google.com/ar"
    },
    "3D Modeling": {
      "explanation": "The process of developing a mathematical representation of a 3D object.",
      "use_cases": "Used in VR/AR simulations, game assets, and animations.",
      "learn_link": "https://www.blender.org/learn/"
    }
  },
  "salary_range_inr": {
    "entry_level": 500000,
    "senior_level": 3500000
  },
  "estimated_days": 160
},
// "Web3 Developer"
{
  "id":21,
  "name": "Web3 Developer",
  "description": "Develop decentralized applications (dApps) using blockchain technologies.",
  "skills_required": ["Solidity", "Ethereum", "Hardhat", "Web3.js", "IPFS", "Smart .Con"],
  "skills_subtopics": {
    "Smart Contracts": {
      "explanation": "Self-executing contracts written on a blockchain.",
      "use_cases": "Used for automating agreements in dApps, NFTs, and DeFi.",
      "learn_link": "https://ethereum.org/en/developers/docs/smart-contracts/"
    },
    "IPFS": {
      "explanation": "Decentralized file storage system for storing and sharing files securely.",
      "use_cases": "Used in dApps to store content off-chain.",
      "learn_link": "https://docs.ipfs.io/"
    }
  },
  "salary_range_inr": {
    "entry_level": 600000,
    "senior_level": 4000000
  },
  "estimated_days": 150
},
// "Technical Product Manager"
{
  "id":22,
  "name": "Technical Product Manager",
  "description": "Bridge business and technical teams to deliver high-impact software products.",
  "skills_required": ["Agile", "Scrum", "User Stories", "JIRA", "Market Research", "Product mapping"],
  "skills_subtopics": {
    "Agile": {
      "explanation": "Project management methodology focused on iterative development.",
      "use_cases": "Used for flexible, fast-paced software releases.",
      "learn_link": "https://www.atlassian.com/agile"
    },
    "User Stories": {
      "explanation": "Short, simple descriptions of a feature told from the user’s perspective.",
      "use_cases": "Used in planning features and product workflows.",
      "learn_link": "https://www.mountaingoatsoftware.com/agile/user-stories"
    }
  },
  "salary_range_inr": {
    "entry_level": 800000,
    "senior_level": 3500000
  },
  "estimated_days": 100
},
// "Big Data Engineer"
{
  "id":23,
  "name": "Big Data Engineer",
  "description": "Design and build systems to process large-scale data using distributed computing.",
  "skills_required": ["Hadoop", "Spark", "Kafka", "Scala", "Hive", "ETL"],
  "skills_subtopics": {
    "Hadoop": {
      "explanation": "Framework for distributed storage and processing of big data.",
      "use_cases": "Used in large enterprises to manage big data workflows.",
      "learn_link": "https://hadoop.apache.org/"
    },
    "Spark": {
      "explanation": "Unified analytics engine for large-scale data processing.",
      "use_cases": "Used for streaming, ML, and interactive analytics.",
      "learn_link": "https://spark.apache.org/docs/latest/"
    }
  },
  "salary_range_inr": {
    "entry_level": 600000,
    "senior_level": 4000000
  },
  "estimated_days": 170
},
// "IoT Developer"
{
  "id":24,
  "name": "IoT Developer",
  "description": "Build smart, connected devices that interact with the physical world.",
  "skills_required": ["Microcontrollers", "C/C++", "Sensors", "MQTT", "Raspberry Pi", "IoT Protocols"],
  "skills_subtopics": {
    "MQTT": {
      "explanation": "Lightweight messaging protocol for small sensors and mobile devices.",
      "use_cases": "Used in smart homes, wearables, and automotive systems.",
      "learn_link": "https://mqtt.org/getting-started/"
    },
    "Raspberry Pi": {
      "explanation": "A small, affordable computer for learning programming and IoT.",
      "use_cases": "Used for prototypes and small-scale connected devices.",
      "learn_link": "https://projects.raspberrypi.org/en"
    }
  },
  "salary_range_inr": {
    "entry_level": 400000,
    "senior_level": 2500000
  },
  "estimated_days": 140
},
// "Embedded Systems Developer"
{
  "id":25,
  "name": "Embedded Systems Developer",
  "description": "Design software for devices with limited computing power (e.g., washing machines, cars).",
  "skills_required": ["C", "C++", "Microcontrollers", "RTOS", "Assembly", "Emb. Linux"],
  "skills_subtopics": {
    "RTOS": {
      "explanation": "Real-Time Operating System ensures time-bound task execution.",
      "use_cases": "Used in mission-critical applications like automotive, aerospace.",
      "learn_link": "https://www.freertos.org/"
    },
    "Embedded Linux": {
      "explanation": "Linux customized for embedded devices and applications.",
      "use_cases": "Used in smart TVs, routers, wearables.",
      "learn_link": "https://elinux.org/"
    }
  },
  "salary_range_inr": {
    "entry_level": 450000,
    "senior_level": 2800000
  },
  "estimated_days": 150
}
]
};

export default Data;