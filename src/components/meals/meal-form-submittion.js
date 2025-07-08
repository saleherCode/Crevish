'use client';

import { useFormStatus } from "react-dom"

export default function MealFormSubmit(){
    const {pending} = useFormStatus();
    return(
        <>
        <button type="submit">{pending ? "Submiting...." : "Share Meal"}</button>
        
        </>
    )
}