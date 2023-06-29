import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import NavigationPanel from "../NavigationPanel";
import Cookies from "js-cookie";

export default function PrivateRoute({children} : any){

    const authToken : string | undefined = Cookies.get('authToken');

    return Boolean(authToken) ?
    <NavigationPanel>
                {children}
    </NavigationPanel>

    : <Navigate to='/login'/>
}