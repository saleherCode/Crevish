import { connect } from "@/src/dbConfig/dbConfig";
import User from "@/src/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import  jwt  from "jsonwebtoken";

connect();


export async function POST(request) {
    try {

        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);

        // Check user exit 
        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json(
                {error: "User does not exist."},
                {status: 400}
            )
        }

        // Check if password is correct 
        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json(
                {error : "Invalid password"},
                {status: 400}
            )
        }


        // Create token Data 
        const tokenData = {
            id: user._id,
            userName: user.userName,
            email: user.email
        }

        //Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"});

        // Set the token in user cookies 
        //sending message
        const response = NextResponse.json({
            message : "Login successful!",
            success: true
        });

        // set the cookies
        response.cookies.set("token", token, {
            httpOnly: true
        })

        // Return the response 
        return response;




    } catch (error) {
        return NextResponse.json(
            {error: error.message},
            {status: 500}
        )
    }
}