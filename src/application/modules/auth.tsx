import { Navigate } from "react-router-dom";
// import HomePage from "../views/pages/home";

export const RequireAuthentication = ( (props: any)=>{
    console.log("prps : ", props);
    // return <Navigate to="auth/signin" />
    return props.children;
});