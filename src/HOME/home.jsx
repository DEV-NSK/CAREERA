

import React, { useState } from "react";
import Insta from "/src/assets/insta.png";
import GitHub from "/src/assets/github.png";
import LinkedIn from "/src/assets/linkedin.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  
  const Roledata1 = [
    {
      name: "Full Stack Developer",
      description: "Master frontend, backend, and deployment using the MERN stack.",
      skills_required: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express"],
      salary_range_inr: { entry_level: 400000, senior_level: 2500000 },
      estimated_days: 120,
    },
    {
      name: "Python Developer",
      description: "Use Python for backend development, automation, and web apps.",
      skills_required: ["Python", "OOP", "File Handling", "APIs", "Flask", "Django"],
      salary_range_inr: { entry_level: 350000, senior_level: 2000000 },
      estimated_days: 90,
    },
    {
      name: "Java Developer",
      description: "Design and build scalable backend systems using Java and Spring.",
      skills_required: ["Java", "OOP", "Collections", "Spring Boot", "JPA", "REST APIs"],
      salary_range_inr: { entry_level: 400000, senior_level: 2200000 },
      estimated_days: 120,
    },
    {
      name: "Data Scientist",
      description: "Analyze data and build ML models to extract insights and predictions.",
      skills_required: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Deep Learning"],
      salary_range_inr: { entry_level: 500000, senior_level: 3500000 },
      estimated_days: 150,
    },
    {
      name: "AI Developer",
      description: "Develop intelligent systems using machine learning and deep learning.",
      skills_required: ["Python", "ML", "Deep Learning", "NLP", "TensorFlow", "Keras"],
      salary_range_inr: { entry_level: 600000, senior_level: 4000000 },
      estimated_days: 180,
    },
    {
      name: "ML Engineer",
      description: "Build production-ready ML pipelines and deploy models at scale.",
      skills_required: ["Python", "ML", "Data Preprocessing", "Model Evaluation", "TensorFlow", "MLOps"],
      salary_range_inr: { entry_level: 550000, senior_level: 3800000 },
      estimated_days: 160,
    }
  ];

  const stats = [
    "Full Stack Developers with MERN skills earn up to ₹18 LPA in India",
    "Companies like Google, Microsoft, and Amazon hire Full Stack Engineers at ₹20–45 LPA",
    "Data Scientists in India earn between ₹8–25 LPA with Python & ML skills",
    "AI Engineers with deep learning skills are among the top 5 highest-paid tech roles in 2025"
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-b-3xl">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral">
              🚀 Launch Your Tech Career with{" "}
              <span className="text-primary">CAREERA</span>
            </h1>
            <p className="py-6 text-lg text-neutral/70">
              Personalized tech career guide designed to help you navigate the complex world of 
              software development and IT roles. Each roadmap includes skills, resources, estimated 
              learning time, and salary insights—from fresher to senior level.
            </p>
            <button 
              className="btn btn-primary rounded-full"
              onClick={() => navigate("/roadmaps")}
            >
              Explore Roadmaps
            </button>
          </div>
        </div>
      </div>

      {/* Top Career Roles */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral">
          Top Career Roles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Roledata1.map((role, index) => (
            <div 
              key={index} 
              className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-base-200"
              onClick={() => navigate("/roadmaps")}
            >
              <div className="card-body">
                <h3 className="card-title text-primary">{role.name}</h3>
                <p className="text-neutral/70">{role.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="badge badge-outline badge-primary">
                    {role.estimated_days} days
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    ₹{role.salary_range_inr.entry_level/100000}L - ₹{role.salary_range_inr.senior_level/100000}L
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral">
            ABOUT <span className="text-primary">CAREERA</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-primary">Why choose CAREERA?</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <span className="text-success mr-2 mt-1">✔</span>
                    <span className="text-neutral/70">Beginner to advanced learning paths – Clear guidance at every stage.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2 mt-1">✔</span>
                    <span className="text-neutral/70">Curated resources – Handpicked YouTube videos, blogs, docs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2 mt-1">✔</span>
                    <span className="text-neutral/70">Salary & duration estimates – Know what to expect at every level.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2 mt-1">✔</span>
                    <span className="text-neutral/70">Career-aligned guidance – Learn what top companies expect.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-primary">How CAREERA works?</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <span className="text-success mr-2 mt-1">✔</span>
                    <span className="text-neutral/70">Choose a roadmap – Select from 25+ tech career tracks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2 mt-1">✔</span>
                    <span className="text-neutral/70">Follow the path – Learn with guided sections and resources.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2 mt-1">✔</span>
                    <span className="text-neutral/70">Mark your progress – Save your journey step-by-step.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2 mt-1">✔</span>
                    <span className="text-neutral/70">Achieve your goal – Gain skills and confidence to get hired.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Marquee */}
      <div className="py-6 bg-primary/10">
        <div className="overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {stats.concat(stats).map((stat, index) => (
              <span key={index} className="mx-8 text-primary font-medium">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <footer className="footer p-10 bg-base-200 text-neutral">
        <div className="max-w-6xl mx-auto w-full text-center">
          <p className="text-xl mb-6 font-medium">Feel free to connect with me on</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/dev._.nest?igsh=MXgwYmtxYzlyN2ZtNw==" 
               target="_blank" rel="noopener noreferrer" className="btn btn-circle bg-base-100 border-base-300 hover:bg-primary/10">
              <img src={Insta} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/bathula-naga-sai-kiran" 
               target="_blank" rel="noopener noreferrer" className="btn btn-circle bg-base-100 border-base-300 hover:bg-primary/10">
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com/DEV-NSK" 
               target="_blank" rel="noopener noreferrer" className="btn btn-circle bg-base-100 border-base-300 hover:bg-primary/10">
              <img src={GitHub} alt="GitHub" className="w-6 h-6" />
            </a>
          </div>
          <p className="mt-8 text-primary">© 2023 CAREERA - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;