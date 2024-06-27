"use client";
//import { Link } from 'react-router-dom';
import Signup from "./signup.js"
//import Link from 'next/link.js'
import axios, { HttpStatusCode } from 'axios';
import React, { useEffect,useState } from 'react';



export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
 


  const handleEmailChange = (event) => {
    console.log('handleEmailChange', event.target.value);
    setEmail(event.target.value);
  };
 
  const handlePasswordChange = (event) => {
    console.log('handleEmailChange', event.target.value);
    setPassword(event.target.value);
  };
 
  const LoginEvent = async (event) => {
    console.log('********************************************')
    event.preventDefault();
    console.log("LoginEvent", event);
 
    // Call the API to login
 
    const requestData = {
      "Email": email,
      "Password": password
    };
    console.log(requestData)
    
    const response =  await axios.post('/api/Member/ValidateUser', requestData, {headers: {'Content-Type': 'application/json',}});
   
    console.log(response)
    if(response.status === HttpStatusCode.Ok) {
     
      console.log("Login successful");
      console.log("response", response.data);
      sessionStorage.setItem('IsUserSession', true);
 
    } else {    
      console.log("Login failed");
      console.log("response", response.data);
      sessionStorage.setItem('IsUserSession', false);
    }
   
  };    

    return (
          

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit ={LoginEvent} >
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address </label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleEmailChange}></input>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlePasswordChange}></input>
        </div>
      </div>

      <div>
        <button  type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Sign in</button>
        
       </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      
    </p>
    
  </div>
  
</div>
    );
  
}


