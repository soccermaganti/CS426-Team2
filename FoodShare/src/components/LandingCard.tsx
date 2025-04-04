import React from 'react';

const LandingCard: React.FC = () => {
  return (
    <div className="max-w-2xl bg-white p-8 rounded-lg shadow-lg">
      {/* Logo and Website Name */}
      <div className="mb-12 text-center">
        <img src="/foodShareLogo.png" alt="FoodShare Logo" className="mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-800">What is FoodShare?</h1>
      </div>
      
      {/* About Section */}
      <div className="mb-12">
        <p className="text-lg text-gray-600">
          Our platform connects businesses and users in a seamless way, providing an intuitive experience for managing services and resources efficiently. 
          Whether you're a business owner looking to streamline your operations or a regular user searching for services, we've got you covered.
        </p>
      </div>
      
      {/* Login Buttons */}
      <div className="flex justify-center space-x-6">
        <a href="/user-login" className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition">User Login</a>
        <a href="/business-login" className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition">Business Login</a>
      </div>
    </div>
  );
};

export default LandingCard;