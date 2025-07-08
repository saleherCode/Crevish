import { connect } from "@/src/dbConfig/dbConfig";  
import User from "@/src/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect();


export async function POST(request) {
    try {
        const reqBody = await request.json();
        const {userName, email, password} = reqBody;
        console.log("Requestbody", reqBody);

        // Check if user exit 
        const user = await User.findOne({email});
        if(user){   
            return NextResponse.json(
                {error : "User already exit." },
                {status : 400}
            )
        }


        //hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);


        // Create New USER 
        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        })

        // Save the user in database
        const savedUser = await newUser.save();
        console.log('This is saved user:', savedUser);


        // Return response 
        return NextResponse.json({
            message: "User create succefully!",
            success: true,
            savedUser
        })


    } catch (error) {
       return NextResponse.json(
        {error: error.message}, 
        {status: 500}
    );
    }
}