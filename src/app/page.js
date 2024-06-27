'use client'

//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import Link from "next/link.js";

import Login from "./page/login.js";

import Signup from "./page/signup.js";

import Link from "next/link.js";

import App from "./page/app.js";

import User from "./page/user.js"

 

 

 

 

export default function Home() {

  return (

 

    (sessionStorage.getItem('IsUserSession') === 'true') ?

      <div>

        <div>Welcome {sessionStorage.getItem('EmailAddress')}</div>

        <div><User></User></div>

      </div>

      :

      (

        <Login></Login>

      )

  );

}

 


