import apiRoutes from "../utils/api";
import { createContext, useState } from 'react';
import axios from "axios";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
    const grab = async()=>{
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/projects")

        console.log(response.data)

        }catch(error){
            console.error("problem fetching the api")
        }
        
    }   
    
    return (
        <MyContext.Provider value={{name,color,description, members}}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, ContextProvider };