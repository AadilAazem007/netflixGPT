import {useState, useRef} from 'react'
import Header from "./Header"
import { validate } from '../utils/validate'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router'

const Login = () => {
    const [signUpStatus, setSignUpStatus] = useState(true)
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const email = useRef(null)
    const password = useRef(null)
    const fullname = useRef(null)

    const updateSignUpStatus = () => {
        setSignUpStatus(!signUpStatus)
    }

    const register = async () => {
        const response = await fetch("http://localhost:3000/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fullname.current.value,
                email: email.current.value,
                password: password.current.value
            })
        })
        const data = await response.json()
        return data
    }

    const login = async () => {
        const response = await fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email.current.value,
                password: password.current.value
            })
        })
        const data = await response.json()
        
        if(data.success === true)
        {
            setSuccess(data.message)
            dispatch(addUser(data.data))
            navigate('/browse')
        }
        else{
            setError(data.error)
        }   
    }

    const handleButtonClick = async () => {
        const validationError = signUpStatus ? validate(fullname.current.value, email.current.value, password.current.value) : validate(null, email.current.value, password.current.value);
        if (validationError) {
            setError(validationError); // Set error state
        } else {
            setError(null); // Clear error if validation passes
            setTimeout(() => {
                setSuccess(null)
            }, 5000)
            
            const result = signUpStatus ? register() : login()
            // const data = await result
        }
    }

    return (
        <>
         <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg" alt="Logo"/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="text-3xl font-bold py-4">{ !signUpStatus ? "Sign In" : "Sign Up" }</h1>
            { signUpStatus ? <input type="text" ref={fullname} className="p-4 my-4 w-full text-black" placeholder="Full Name" /> : "" }
            <input ref={email} type="email" className="p-4 my-4 w-full text-black" placeholder="Email or phone number" />
            <input ref={password} type="password" className="p-4 my-4 w-full text-black" placeholder="Password" />
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button type="submit" className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonClick}> {signUpStatus ? "Sign Up" : "Sign In"}</button>
            <p className="py-4 cursor-pointer" onClick={updateSignUpStatus}> {!signUpStatus ? "New to Netflix? Sign up now" : "Already Registerd? Sign In now"} </p>
        </form>
        </>
    )
}

export default Login