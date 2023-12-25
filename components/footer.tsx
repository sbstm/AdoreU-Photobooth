'use client';
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/image 4 (Traced).png'

export default function Footer() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    return (

<div className="grid grid-cols-3 grid-rows-1 gap-4 mt-10 pt-20 bottom-0 text-blue-900" >
<div className="text-left pl-10">
    <h3 className="text-xl font-semibold italic ">ADOREu</h3>
    <ul>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">PROJECT</a></li>
        <li><a href="#">SEND A MESSAGE</a></li>
    </ul>
</div>
<div className="text-center">
    <h3 className="text-xl font-semibold italic ">LOCATION</h3>
    <h1> ITB, BANDUNG </h1> 
</div>
<div className="text-right pr-10">
    <h3 className="text-xl font-semibold italic ">SERVICES</h3>
    <ul>
        <li><a href="#">SERVICES AREAS</a></li>
        <li><a href="#">PRICING</a></li>
        <li><a href="#">FAQ</a></li>
    </ul>
</div>

<div className="text-left pl-10 pb-10 ">
    <h3 className="text-xl">COPYRIGHT &copy; 2023</h3>
</div>
<div className="text-center"></div>
<div className="text-right pr-10 pb-10">
    <h3 className="text-xl ">ADOREu x 213 present</h3>
</div>
</div>

)
            }