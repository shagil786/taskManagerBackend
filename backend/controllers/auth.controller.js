import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    // console.log(req.body);
    try {
        const{ firstname, lastname, email, password, confirmPassword } = req.body

        if(password !== confirmPassword){
            return res.status(400).json({
                error: "Passwords don't match"
            })
        }

        const salt = await bcrypt.genSalt(10)

        const user = await User.findOne({email})
        const hasedPass = await bcrypt.hash(password, salt)

        if(user){
            return res.status(400).json({
                error: "User already exists!!!!"
            })
        }

        const profilePic = `https://avatar.iran.liara.run/username?username=${firstname}+${lastname}`

        const newUser = new User ({
            firstname,
            lastname,
            email,
            password: hasedPass,
            profilePic
        })
        console.log(newUser);

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id:newUser._id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        } else{
            res.status(400).json({
                error: "Invalid data"
            })
        }

        
    } catch (error) {
        console.log("Error while signup:- ",error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}


export const login = async (req, res) => {
    // console.log(req.body);
    try {
        const { email, password } = req.body
        const user = await User.findOne({email})
        // console.log(user);

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            res.status(400).json({
                error: "Invalid Data!!"
            })
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log("Error while login:- ",error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}


export const logout = (req, res) => {
    try {
        res.cookie("jwt", "",{
            maxAge: 0
        })
        res.status(200).json({
            message: "User logged out."
        })
    } catch (error) {
        console.log("Error while logout:- ",error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}