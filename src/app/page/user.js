"use client";
import axios, { HttpStatusCode } from 'axios';
import { AmpStateContext } from 'next/dist/shared/lib/amp-context.shared-runtime';
import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react';


export default function User() {

    
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    

    
    
    

    const fetchData = async (username) => {
        try {
            const result = await axios.get(`/api/Member/UserDetails?username=${firstname}`);
            const UserData = result.data;
            if (UserData == username) {
                console.log("Login successful");
                console.log(UserData.data.Firstname);
                console.log(UserData.data.Lastname);
                console.log(UserData.data.Mobile);
                console.log(UserData.data.Email);
                
                // Update state with fetched data
                setUsername(UserData.Firstname);
                setLastname(UserData.Lastname);
                setMobile(UserData.Mobile);
                setEmail(UserData.Email);
                setError('');
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const LoginEvent = async (event) => {
        console.log('********************************************')
        event.preventDefault();
        fetchData(username)
  
  

  };


return(
    
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit ={LoginEvent}  >
      <div>
        <label for="Username" class="block text-sm font-medium leading-6 text-white"> Username </label>
        <div class="mt-2">
          <input id="username" name="username" type="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
      </div>


      <div>
        <button  type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Sign in</button>
        
       </div>
       
    </form>
</div>


);
}