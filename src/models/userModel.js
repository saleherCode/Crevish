import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please provide a Username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please give email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please type password."]
    },
    isVarifide: {
        type: Boolean,
        default : false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPassword: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
});


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;