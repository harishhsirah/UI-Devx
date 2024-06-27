"use client";

import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function UserDetails() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    // Function to fetch user details
    const fetchData = async (username) => {
        try {
            const encodedUsername = encodeURIComponent(username);
            const result = await axios.get(`/api/Member/UserDetails?username=${encodedUsername}`);

            console.log('API response:', result.data);
            if (result.data && result.data.firstname === username) {
                console.log("Login successful");
                console.log(result.data.firstname);
                console.log(result.data.lastname);
                console.log(result.data.mobile);
                console.log(result.data.email);
                
                // Update state with fetched data
                setFirstname(result.data.firstname);
                setLastname(result.data.lastname);
                setMobile(result.data.mobile);
                setEmail(result.data.email);
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        fetchData(username); // Call fetchData with the current username
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">User Name</label>
                <div>
                    <input 
                        id="username" 
                        name="username" 
                        type="text" 
                        required 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    />
                </div>
            </div>
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign in
                </button>
            </div>
        </form>
    );
}