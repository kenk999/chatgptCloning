import { useAuth } from "@clerk/clerk-react";
import "./dashboardLayout.css"
import {Outlet, useNavigate} from "react-router-dom"
import { useEffect } from "react";
function DashboardLayout(){
const {userId,isLoaded}=useAuth();
const navigate=useNavigate()
useEffect(function(){
    if(isLoaded && !userId){
navigate("/sign-in")
    }
},[isLoaded,userId,navigate])
    return(
        <div className="dashboardLayout">
            <div className="menu">MENU</div>
            <div className="contact">
                <Outlet/>
            </div>
        </div>
    )
}

export default DashboardLayout;