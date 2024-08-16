// src/LoginForm.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if(username == "admin" && password == "admin"){
        navigate("/admin")
    }
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100 px-4 sm:px-0">
        <h1 className='text-2xl my-2 font-extrabold bg-gradient-to-r from-blue-800 to-slate-500 text-transparent bg-clip-text'>Customcliq Admin Login</h1>
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded focus:outline-none focus:ring-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter password"
          />
        </div>
        <div className="flex items-center justify-between">
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            >
            Sign In
            </button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default LoginForm;
