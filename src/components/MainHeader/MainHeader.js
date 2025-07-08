
"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from '../../assets/logo-2.png';
import classes from './MainHeader.module.css';
import MainHeaderBackground from "./MainHeaderBackground";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import LogoutLink from "../LogoutLink/LogoutLink";
import { useState, useEffect } from "react";

export default function MainHeader(req){


    const [isLoggedIn, setIsLoggedin] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch('/api/users/statusCheck');
            const data = await response.json();
            console.log("data:", data);
            setIsLoggedin(data.loggedIn);
            console.log("Status Log:", data.loggedIn);
        }

        checkAuth();
    }, [])


    return(
        
        <>
        {/* <MainHeaderBackground /> */}
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={LogoImg} alt="" priority />
                {/* Cravish */}
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink href="/meals">Browse Meal</NavLink></li>
                    <li><NavLink href="/meals/share">Share Recipe</NavLink></li>
                    <li><NavLink href="/community">Foodies Community</NavLink></li>
                    <li>{!isLoggedIn ? (<NavLink href="/login">Login</NavLink>) : (<LogoutLink />)} </li>
                    
                    
                </ul>
            </nav>
        </header>
        </>
       
    )
}