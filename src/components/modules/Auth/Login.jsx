import React from 'react';
import { Typography } from '@mui/material';
import CustomButton from '../../common/Button';
const Login = () => {
    return (
        <div>Login

            <Typography variant="h4" component="h1" >
                Login

            </Typography>
            <CustomButton text="Continue" variant="contained" />
        </div>
    )
}

export default Login