import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="md:w-1/2 mx-auto text-center">
        <img
          src="company_logo.png" // Replace with the path to your company logo
          alt="Company Logo"
          className="mb-4"
          style={{ width: '100px', height: '100px' }}
        />
        <h2 className="text-2xl font-bold">Welcome to Our Company</h2>
        <p className="mt-2">Explore and interact with our chat bot!</p>
        <Link to="/create-prompt">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Create Prompt
          </button>
        </Link>
        <Link to="/rank-prompt">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Rank Your Prompt</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
