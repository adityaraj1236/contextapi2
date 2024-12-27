import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
    const [user , setUser] = React.useState(null)
    return (
        <>
            <UserContext.Provider value={{user , setUser
            // baaki jis cheez ka bhi acces dena hai ham de skte hain
            }}>
            {children}
            </UserContext.Provider>
        </>
    )
}


export default UserContextProvider