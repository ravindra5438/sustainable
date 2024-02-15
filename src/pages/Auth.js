import React from 'react'
import { useTheme } from '@mui/material/styles';
import Login from '../components/modules/Auth/Login';


const Auth = () => {
    const theme = useTheme()
    return (
        <div >
            <Login />
        </div>
    )
}

export default Auth