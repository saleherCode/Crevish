"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import classes from './page.module.css';




export default function SignupPage(){

    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        userName: ""
    });

    const [buttonIsDisabled, setButtonIsDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);


     const onSignUp = async () => {
        try { 
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup Succes", response.data);
            router.push('/login');
        } catch (error) {
            console.log("Signup Failed!", error.message);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.password.length > 0){
            setButtonIsDisabled(false);
        }else{
            setButtonIsDisabled(true);
        }
    }, [user])


    return(
        <>
           <section className={classes.userPage}>
                <div className="container">
                    <div className={classes.userPage_inner}>                    
                        <h1 className={classes.userPage_title}>{loading ? "Processing..." : "Sign Up"}</h1>
                        <div className={classes.fromGrp}>
                            <label className={classes.label}>User Name</label>
                            <input
                            name="text"
                            className={classes.formControl}
                            type="text" 
                            placeholder="User Name"
                            value={user.userName}
                            onChange={(e) => setUser({...user, userName: e.target.value})}
                            />
                        </div>
                        <div className={classes.fromGrp}>
                            <label className={classes.label}>Email</label>
                            <input 
                            name="email"
                            className={classes.formControl}
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value}) }
                            placeholder="User Email"
                            />
                        </div>
                        <div className={classes.fromGrp}>
                            <label className={classes.label}>Password</label>
                            <input 
                            name="password"
                            className={classes.formControl}
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                            placeholder="Password"
                            />
                        </div>
                        <div className={classes.fromGrp}>
                            <button 
                            onClick={onSignUp}
                            className={classes.button} type="submit">
                                {buttonIsDisabled ? "Not Sign Up" : "Sign Up"}
                            </button>
                        </div>
                        <div className={classes.fromGrp}>
                            Already Have an account? <Link className={classes.link} href="/login"> Login</Link>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
} 