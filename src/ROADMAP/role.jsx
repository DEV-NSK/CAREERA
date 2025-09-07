

import React from "react";
import Data from "/src/data.jsx";
import { useParams, useNavigate } from "react-router-dom";

const Role = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!Data || !Data.roles) {
    return <p>Roles data not found</p>;
  }

  const matched = Data.roles.find((x) => String(x.id) === String(id));

  if (!matched) {
    return <p>Role not found</p>;
  }

  return (
    <div className="min-h-screen bg-base-100 p-4">
      <div className="max-w-4xl mx-auto">
        <button 
          className="btn btn-ghost btn-sm mb-6 text-primary"
          onClick={() => navigate("/roadmaps")}
        >
          ← Back to Roadmaps
        </button>
        
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h1 className="card-title text-3xl text-primary mb-2">{matched.name}</h1>
            <p className="text-neutral/70 text-lg mb-6">{matched.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Salary Range (INR)</h3>
                <p>Entry Level: ₹{matched.salary_range_inr.entry_level/100000}L</p>
                <p>Senior Level: ₹{matched.salary_range_inr.senior_level/100000}L</p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Estimated Duration</h3>
                <p>{matched.estimated_days} days (~{Math.round(matched.estimated_days/30)} months)</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Skills Required</h2>
              <div className="flex flex-wrap gap-2">
                {matched.skills_required.map((skill, index) => (
                  <span key={index} className="badge badge-primary badge-lg">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Skills Details</h2>
              <div className="space-y-4">
                {matched.skills_required.map((skill, index) => {
                  if (matched.skills_subtopics && matched.skills_subtopics[skill]) {
                    const skillInfo = matched.skills_subtopics[skill];
                    return (
                      <div key={index} className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">{skill}</div>
                        <div className="collapse-content">
                          <p className="mb-2"><strong>Explanation:</strong> {skillInfo.explanation}</p>
                          <p className="mb-2"><strong>Use Cases:</strong> {skillInfo.use_cases}</p>
                          {skillInfo.learn_link && (
                            <a 
                              href={skillInfo.learn_link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="link link-primary"
                            >
                              Learn More
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            
            <div className="card-actions justify-end mt-8">
              <button className="btn btn-primary">Start Learning Path</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;