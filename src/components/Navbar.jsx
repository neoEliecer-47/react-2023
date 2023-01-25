
import {NavLink} from 'react-router-dom'
import { useUserContext } from '../context/UserContext'



const Navbar = () => { 
    
    
   const {user, setUser} = useUserContext()
    
    
    return(
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    
                    
                    
                    <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                    <NavLink to="/blog" className="btn btn-outline-primary">Blog</NavLink>
                    <NavLink to="/about" className="btn btn-outline-primary">About</NavLink>
                    {user && 
                    (
                        <>
                            <NavLink to="/dashboard" className="btn btn-outline-primary">Dashboard</NavLink>
                            <button onClick={() => setUser(false)}>logout</button>
                        </>
                    )
                    }{/*si el usuario exist devolvemos el dashboard*/ }
                    
                </div>
            </nav>

        </>
    )
 }

export default Navbar