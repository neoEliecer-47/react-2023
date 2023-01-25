import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext()


const UserProvider  = ({ children }) => { //cada componente en react tiene acceso al children

    const [user, setUser] = useState(false)
    
    return (
        <UserContext.Provider value={ {user, setUser} }>
            {children}
        </UserContext.Provider>    
    )
 }


 export default UserProvider

 export const useUserContext = () => useContext(UserContext)