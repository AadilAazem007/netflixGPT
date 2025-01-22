import { useEffect } from 'react'
import { Link } from 'react-router'
import { removeUser } from '../utils/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user.user)
    const navigate = useNavigate()
    useEffect(() => {
        console.log(user, ' headers')
    }, [])

    const handleLogout = () => {
        dispatch(removeUser())
        navigate('/')
    }

    return(
        <>
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
             <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo"/>
            <div className='flex'> 
            { user ? 
            <>
            <Link to='/'><button className="absolute right-12 top-10 bg-[#e50914] py-2 px-6 rounded text-white hover:bg-[#f40612]" onClick={handleLogout}>Logout</button></Link>
            <div className='absolute right-5 top-2 text-red font-bold'>Hello, {user?.name}</div>
            </>
            :
            <Link to="/login"><button className="absolute right-5 top-5 bg-[#e50914] py-2 px-6 rounded text-white hover:bg-[#f40612]">Sign In</button></Link>
            }
            </div>
        </div>
        </>
    )
}

export default Header