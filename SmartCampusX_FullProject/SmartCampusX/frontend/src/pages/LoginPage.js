
import React from 'react';

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form className="bg-gray-100 p-6 rounded shadow-md">
        <h1 className="text-2xl mb-4">Login</h1>
        <input className="block w-full mb-3 p-2" type="email" placeholder="Email" />
        <input className="block w-full mb-3 p-2" type="password" placeholder="Password" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
