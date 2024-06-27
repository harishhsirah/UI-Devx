"use client";
import Signup from "./signup.js";
import axios, { HttpStatusCode } from 'axios';
import React, { useState } from 'react';
 
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
 
  const handleEmailChange = (event) => {
    console.log('handleEmailChange', event.target.value);
    setEmail(event.target.value);
  };
 
  const handlePasswordChange = (event) => {
    console.log('handlePasswordChange', event.target.value);
    setPassword(event.target.value);
  };
 
  const LoginEvent = async (event) => {
    console.log('********************************************');
    event.preventDefault();
    console.log("LoginEvent", event);
 
    try {
      const response = await axios.post(`/api/Member/ValidateUser?Email=${email}&Password=${password}`);
      console.log(response);
 
      if (response.status === HttpStatusCode.Ok) {
        console.log("Login successful");
        console.log("response", response.data);
        sessionStorage.setItem('IsUserSession', true);
        sessionStorage.setItem('EmailAddress', email);
        window.location.reload();
      } else {
        console.log("Login failed");
        console.log("response", response.data);
        sessionStorage.setItem('IsUserSession', false);
        sessionStorage.removeItem('EmailAddress');
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login failed with error", error);
      setError("An error occurred during login. Please try again.");
    }
  };
 
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
      </div>
 
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={LoginEvent}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleEmailChange} />
            </div>
          </div>
 
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlePasswordChange} />
            </div>
          </div>
 
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
 
        {error && <p className="mt-2 text-center text-sm text-red-500">{error}</p>}
 
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member? <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Sign up</a>
        </p>
      </div>
     
    </div>
  );
}
