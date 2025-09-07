

import React, { useState, useEffect } from 'react'
import { auth, db } from '/src/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        // Fetch user data from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
          if (userDoc.exists()) {
            setUserData(userDoc.data())
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      } else {
        navigate('/login')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary">Dashboard</h1>
        
        {/* Welcome Section */}
        <div className="card bg-base-100 shadow-md border border-base-300 mb-8">
          <div className="card-body">
            <h2 className="card-title text-primary">
              Welcome back, {userData?.name || 'User'}!
            </h2>
            <p>Email: {user?.email}</p>
            <p>Account Type: <span className="badge badge-primary">{userData?.role || 'user'}</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Progress Card */}
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-primary">Learning Progress</h2>
              <div className="radial-progress text-primary" style={{"--value":70}} role="progressbar">
                70%
              </div>
              <p>You've completed 70% of your current roadmap</p>
            </div>
          </div>
          
          {/* Recent Activity Card */}
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-primary">Recent Activity</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-success mr-2">✓</span>
                  <span>Completed HTML basics</span>
                </li>
                <li className="flex items-center">
                  <span className="text-success mr-2">✓</span>
                  <span>Completed CSS fundamentals</span>
                </li>
                <li className="flex items-center">
                  <span className="text-info mr-2">→</span>
                  <span>Started JavaScript section</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Recommended Next Steps Card */}
          <div className="card bg-base-100 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-primary">Next Steps</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-warning mr-2">●</span>
                  <span>Complete JavaScript fundamentals</span>
                </li>
                <li className="flex items-center">
                  <span className="text-warning mr-2">●</span>
                  <span>Start React basics</span>
                </li>
                <li className="flex items-center">
                  <span className="text-warning mr-2">●</span>
                  <span>Practice with mini projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Current Roadmap Section */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-4 text-primary">Current Roadmap: Full Stack Developer</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Status</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HTML</td>
                    <td><span className="badge badge-success">Completed</span></td>
                    <td><progress className="progress progress-primary w-24" value="100" max="100"></progress></td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td><span className="badge badge-success">Completed</span></td>
                    <td><progress className="progress progress-primary w-24" value="100" max="100"></progress></td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td><span className="badge badge-warning">In Progress</span></td>
                    <td><progress className="progress progress-primary w-24" value="70" max="100"></progress></td>
                  </tr>
                  <tr>
                    <td>React</td>
                    <td><span className="badge badge-secondary">Not Started</span></td>
                    <td><progress className="progress progress-primary w-24" value="0" max="100"></progress></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard