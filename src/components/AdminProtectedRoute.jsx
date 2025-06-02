// AdminProtectedRoute.jsx
import React, { useState } from 'react';
import ProductUpload from './ProductUpload';

const AdminProtectedRoute = () => {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'zainadmin123') {
      setAuthorized(true);
    } else {
      alert('Wrong password');
    }
  };

  if (authorized) {
    return <ProductUpload />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-md">
        <h2 className="text-xl font-bold mb-4">Admin Access</h2>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 w-full mb-4 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">
          Enter
        </button>
      </form>
    </div>
  );
};

export default AdminProtectedRoute;
