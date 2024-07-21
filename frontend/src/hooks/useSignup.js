import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const signup = async ({firstname, lastname, email, password, confirmPassword}) => {
        const success = handleInputErrors({
            firstname, lastname, email, password, confirmPassword
        })

        if(!success) return

        setLoading(true)
        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname, lastname, email, password, confirmPassword
                }),
            })

            const data = await res.json()
            if(data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("loggedin-user", JSON.stringify(data))
            setAuthUser(data)
            
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, signup }
}
export default useSignup

function handleInputErrors({firstname, lastname, email, password, confirmPassword}){

    if (!firstname || !lastname || !password || !confirmPassword || !email) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}