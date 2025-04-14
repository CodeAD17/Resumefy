import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to create the user
    console.log('Form submitted:', formData);
    // Navigate to dashboard after successful signup
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        {/* Left side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src="img/signupPage.png"
            alt="Signup illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Sign up</h2>
              <p className="text-xl text-gray-600">to Resumify.AI</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Date of birth</label>
                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#00A3FF] text-white py-3 rounded-full hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-8 text-center text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-[#00A3FF] hover:underline font-medium">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 