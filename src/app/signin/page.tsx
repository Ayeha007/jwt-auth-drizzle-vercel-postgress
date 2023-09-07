"use client";

import React, { useState } from 'react';

const SignInForm = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
   
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      
      try {
        const response = await fetch('/api/signin',{
          method: "POST",
          body: JSON.stringify({
            userEmail: userEmail,
            userPassword: userPassword
          }),
          headers: {
            'Content-type': 'application/json',
          }
        });
  
        if (response.ok) {
          alert("Submitted Successfully")
        }else{
  
        }

      } catch (error) {
        console.log(error);  
      }
};
return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-4 bg-white rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="mb-4">
          <label htmlFor="user Email" className="block text-gray-700 font-semibold">User Email:</label>
          <input
            type="text"
            id="userEmail"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="user Password" className="block text-gray-700 font-semibold">User Password:</label>
          <input
            type="text"
            id="user Password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </div>
      
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded py-2 font-semibold hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default SignInForm;
