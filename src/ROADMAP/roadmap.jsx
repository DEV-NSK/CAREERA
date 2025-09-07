
import React from 'react'
import Data from "/src/data.jsx"
import { useNavigate } from 'react-router-dom'

const Roadmap = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-base-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center my-8 text-primary">
          Top Career Roles
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Data.roles.map((role, index) => {
            return (
              <div key={index} className='card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 border border-base-300'>
                <div className='card-body'>
                  <h3 className='card-title text-primary'>{role.name}</h3>
                  <p className='text-neutral/70'>{role.description}</p>
                  <div className='my-4'>
                    <p className='font-semibold mb-2'>Requires:</p>
                    <div className='flex flex-wrap gap-2'>
                      {role.skills_required.map((skill, i) => (
                        <span key={i} className='badge badge-outline badge-primary'>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className="badge badge-primary badge-outline">
                      {role.estimated_days} days
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      ₹{role.salary_range_inr.entry_level/100000}L - ₹{role.salary_range_inr.senior_level/100000}L
                    </div>
                  </div>
                  <div className='card-actions justify-end mt-4'>
                    <button 
                      className="btn btn-primary btn-sm rounded-full"
                      onClick={() => navigate(`roles/${role.id}`)}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Roadmap