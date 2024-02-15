import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Login from '../components/modules/Auth/Login';
import Register from '../components/modules/Auth/Register';


const Auth = () => {
    const theme = useTheme()
    const [login,setLogin] = useState(false);
    return (
        <div >
            {login?<Login setLogin = {setLogin}/>:<Register setLogin = {setLogin} />}
        </div>
    )
}

export default Auth