import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"

const layoutPrivate = () => { 
    
    const {user, setUser} = useUserContext()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!user) navigate("/")
    }, [user])
    
    return (
        <>
           
            <Outlet />
        </>
    )
 }

 export default layoutPrivate

 /*{
    user ? <Outlet /> : <Navigate to="/"/>      una manera mas sencilla de hacerlo con Navigate de React
 }*/