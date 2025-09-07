


// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { useNavigate, Link } from 'react-router-dom';
// import { auth, db } from '/src/firebase/firebase';

// const Signup = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('user'); // Set default role
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         setError('');
//         setLoading(true);

//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             // Create user document in Firestore
//             const userDoc = {
//                 name,
//                 email,
//                 role,
//                 createdAt: new Date(),
//                 uid: user.uid
//             };

//             // Use the 'users' collection instead of role-based collections
//             await setDoc(doc(db, "users", user.uid), userDoc);

//             alert("Signup successful");
//             navigate('/login');
//         } catch (error) {
//             console.error("Signup error:", error);
//             setError(error.message.replace("Firebase: ", ""));
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-base-100 p-4">
//             <div className="card bg-base-100 shadow-xl w-full max-w-md">
//                 <div className="card-body">
//                     <h2 className="card-title justify-center text-2xl font-bold text-primary mb-2">
//                         Create Account
//                     </h2>
//                     <p className="text-center text-neutral mb-6">Join us to start your career journey</p>
                    
//                     <form onSubmit={handleSignup}>
//                         <div className="form-control mb-4">
//                             <label className="label">
//                                 <span className="label-text">Full Name</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                                 className="input input-bordered input-primary"
//                             />
//                         </div>

//                         <div className="form-control mb-4">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 className="input input-bordered input-primary"
//                             />
//                         </div>

//                         <div className="form-control mb-4">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Create a password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 className="input input-bordered input-primary"
//                                 minLength={6}
//                             />
//                         </div>

//                         <div className="form-control mb-4">
//                             <label className="label">
//                                 <span className="label-text">Account Type</span>
//                             </label>
//                             <select 
//                                 value={role} 
//                                 onChange={(e) => setRole(e.target.value)}
//                                 className="select select-bordered select-primary"
//                             >
//                                 <option value="user">User</option>
//                                 <option value="admin">Admin</option>
//                             </select>
//                         </div>

//                         {error && (
//                             <div className="alert alert-error mb-4">
//                                 <span>{error}</span>
//                             </div>
//                         )}

//                         <div className="form-control mt-6">
//                             <button 
//                                 type="submit" 
//                                 className="btn btn-primary"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Creating Account...' : 'Sign Up'}
//                             </button>
//                         </div>
//                     </form>

//                     <p className="text-center mt-4 text-neutral">
//                         Already have an account?{' '}
//                         <Link to="/login" className="text-primary hover:underline font-medium">
//                             Login
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;













import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '/src/firebase/firebase';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        
        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }
        
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Update user profile with display name
            await updateProfile(user, {
                displayName: formData.name
            });

            // Create user document in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: formData.name,
                email: formData.email,
                role: 'user', // Default role is always 'user'
                currentlyLearning: null,
                learningPath: [],
                createdAt: new Date(),
                uid: user.uid
            });

            alert("Account created successfully!");
            navigate('/login');
        } catch (error) {
            console.error("Signup error:", error);
            let errorMessage = error.message.replace("Firebase: ", "");
            
            // More user-friendly error messages
            if (errorMessage.includes("email-already-in-use")) {
                errorMessage = "This email is already registered. Please try logging in.";
            } else if (errorMessage.includes("weak-password")) {
                errorMessage = "Password should be at least 6 characters.";
            } else if (errorMessage.includes("invalid-email")) {
                errorMessage = "Please enter a valid email address.";
            }
            
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Logo/Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">CareerPath</h1>
                    <p className="text-neutral/70">Start your professional journey today</p>
                </div>
                
                {/* Signup Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
                            <p className="text-gray-600 mt-2">Join us to explore career roadmaps</p>
                        </div>
                        
                        <form onSubmit={handleSignup}>
                            <div className="space-y-5">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                                    />
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Create a password (min. 6 characters)"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                                        />
                                        <button 
                                            type="button"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Confirm Password
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mt-5 p-3 bg-error/10 text-error rounded-lg flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className="w-full mt-6 py-3 px-4 rounded-lg bg-primary hover:bg-primary-focus text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating Account...
                                    </span>
                                ) : "Sign Up"}
                            </button>
                        </form>

                        {/* Login Link */}
                        <p className="text-center mt-6 text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-primary hover:underline font-medium transition-colors duration-200">
                                Log in
                            </Link>
                        </p>
                    </div>
                    
                    {/* Footer */}
                    <div className="bg-gray-50 py-4 px-8 text-center">
                        <p className="text-xs text-gray-500">
                            By creating an account, you agree to our{' '}
                            <a href="#" className="text-primary hover:underline">Terms of Service</a> and{' '}
                            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;