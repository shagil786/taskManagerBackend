import React, { useState } from 'react';
import OAuth from '../../components/OAuth';
import useLogin from '../../hooks/useLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, login } = useLogin()

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission
    await login( email, password )
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 max-w-lg border-4 border-solid border-blue-700 w-2/4">
        <h2 className="text-3xl font-bold text-left mb-4 text-blue-600">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <span>Already have an account?</span>
          <a href="/signup" className="text-blue-500 hover:text-blue-700">
            Signup
          </a>
        </div>
        <div className="text-center mt-4">
            <OAuth />
        </div>
      </div>
    </div>
  );
}

export default Login;
