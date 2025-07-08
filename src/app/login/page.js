"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import classes from './page.module.css';
import toast from "react-hot-toast";




export default function LoginPage(){

    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const [buttonIsDisabled, setButtonIsDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/login', user);
            console.log("Login successfull!", response.data);
            toast.success("Login Success");
            router.push("/meals")
        } catch (error) {
            console.log("Login failed!", error.message);
            toast.error("Login Failed.");
        }finally{
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
                        <h1 className={classes.userPage_title}>{loading ? "Processing..." : "Login"}</h1>
                        <div className={classes.fromGrp}>
                            <label className={classes.label}>Email</label>
                            <input 
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
                            className={classes.formControl}
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                            placeholder="Password"
                            />
                        </div>
                        <div className={classes.fromGrp}>
                            {/* <button 
                            onClick={onLogin}
                            className={classes.button} type="submit">
                                {buttonIsDisabled ? "Not Login" : "Login"}
                            </button> */}
                            <button 
                            onClick={onLogin}
                            className={`${classes.button} ${buttonIsDisabled ? classes.buttonDis : ""}`} type="submit">
                                {buttonIsDisabled ? "Enter Login Details" : "Login"}
                            </button>
                        </div>
                        <div className={classes.fromGrp}>
                            New here, please <Link className={classes.link} href="/signup">Sign Up!</Link>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
} 