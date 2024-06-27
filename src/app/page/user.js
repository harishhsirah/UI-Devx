"use client";
 
import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
export default function UserDetails() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
 
    // Function to fetch user details
    const fetchData = async (email) => {
        try {
 
            const result = await axios.get(`/api/Member/UserDetails?email=${email}`);
            var data = JSON.stringify(result.data)

            console.log('API response:', data);
            console.log("**************",JSON.parse(data));
            if (result.data != null) {
                console.log("Login successful");
                const {_id, Firstname} = data;
                console.log('--------------->>>>', _id, Firstname,result.data);
                console.log(result.data.Firstname);
                console.log(result.data.Lastname);
                console.log(result.data.Mobile);
                console.log(result.data.Email);
               
                // Update state with fetched data
                setFirstname(result.data.Firstname);
                setLastname(result.data.Lastname);
                setMobile(result.data.Mobile);
                setEmail(result.data.Email);
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };
 
    useEffect(() => {
        // Fetch user details when component mounts
        fetchData(sessionStorage.getItem('EmailAddress'));
    }, []);
   
 
    return (
        <div>
            <label>First Name: {firstname}</label>
            <label>Last Name: {lastname}</label>
            <label>Mobile: {mobile}</label>
            <label>Email: {email}</label>
        </div>
    );
}
