import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    
    const token = jwt.sign({userId}, process.env.JWT_TOKEN, {
        expiresIn: '15d' // expires in 15 days
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in miliseconds
        httpOnly: true, // prevent XSS attack
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'development'
    })
}

export default generateTokenAndSetCookie