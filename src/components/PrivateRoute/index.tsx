import { Navigate } from "react-router-dom";
import NavigationPanel from "../NavigationPanel";
import Cookies from "js-cookie";

export default function PrivateRoute({children} : any){

    const access_token : string | undefined = Cookies.get('access_token');

    return Boolean(access_token) ?
    <NavigationPanel>
                {children}
    </NavigationPanel>

    : <Navigate to='/login'/>
}