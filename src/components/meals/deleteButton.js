"use client";


export default function DeleteButton({slug}){
    return(
        <>          
            <input type="hidden" name="slug" value={slug} />
            <button type="submit" className="delete-btn">Delete Meal</button>        
        </>
    )
}