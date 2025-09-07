
import React, { useState, useEffect } from 'react'
import { auth, db } from '/src/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
          if (userDoc.exists()) {
            const data = userDoc.data()
            setUserData(data)
            setFormData(data)
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

  const handleSave = async () => {
    try {
      await updateDoc(doc(db, 'users', user.uid), formData)
      setUserData(formData)
      setEditing(false)
      alert('Profile updated successfully!')
    } catch (error) {
      console.error('Error updating profile:', error)
      alert('Error updating profile. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary">Profile</h1>
        
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="avatar">
                <div className="w-24 rounded-full bg-primary text-primary-content text-4xl font-bold flex items-center justify-center">
                  {userData?.name?.charAt(0) || 'U'}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{userData?.name || 'User'}</h2>
                <p className="text-neutral/70">{user?.email}</p>
                <p className="badge badge-primary mt-2">{userData?.role || 'user'}</p>
              </div>
            </div>
            
            <div className="divider"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Personal Information</h3>
                {editing ? (
                  <div className="space-y-3">
                    <div>
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name || ''}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="input input-bordered w-full input-disabled"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-neutral/70">Full Name</label>
                      <p className="font-medium">{userData?.name || 'Not set'}</p>
                    </div>
                    <div>
                      <label className="text-sm text-neutral/70">Email</label>
                      <p className="font-medium">{user?.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-neutral/70">Joined Date</label>
                      <p className="font-medium">
                        {userData?.createdAt?.toDate?.().toLocaleDateString() || 'N/A'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Learning Statistics</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-neutral/70">Current Roadmap</label>
                    <p className="font-medium">Full Stack Developer</p>
                  </div>
                  <div>
                    <label className="text-sm text-neutral/70">Overall Progress</label>
                    <div className="flex items-center gap-2">
                      <progress className="progress progress-primary w-24" value="45" max="100"></progress>
                      <span>45%</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-neutral/70">Skills Completed</label>
                    <p className="font-medium">8 out of 18</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="divider"></div>
            
            <div className="flex justify-end gap-4">
              {editing ? (
                <>
                  <button 
                    className="btn btn-ghost"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <button 
                  className="btn btn-primary"
                  onClick={() => setEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
