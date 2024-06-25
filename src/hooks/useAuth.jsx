import { useContext } from "react";
import { AuthContext } from "../providers/authprovider";


const UseAuth = () => {
    
    const auth = useContext(AuthContext);
    
    return auth;
};

export default UseAuth;