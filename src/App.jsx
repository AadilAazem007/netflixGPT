import { useEffect } from 'react'
import Body from "./components/Body"
import Login from "./components/Login"
import Browse from "./components/Browse"
import { Routes, Route, useNavigate } from 'react-router'
import Header from "./components/Header"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector((store) => store.user.user)
  const navigate = useNavigate()
  useEffect(() => {
    if(user !== null)
    {
        navigate('/browse')
    }
    else
    {
      navigate('/')
    }
  }, [])

  return (
    <>
            <Header />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/login" element={<Login />} />
                <Route path="/browse" element={<Browse />} />
            </Routes>
    </>
  )                         
}

export default App
  