"use client"
import { createContext, useState } from "react"
import { registerUser } from "@/services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)

    async function register(data){
        setLoading(true)
        try{
            await registerUser(data);
        }
        catch(error){
            throw error;
        }
        finally{
            setTimeout(() => {
                setLoading(false)
            },2500)
        }
    }


    return <UserContext.Provider value={{loading,register}}>
        {children}
    </UserContext.Provider>
}