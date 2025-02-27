import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fd4958',
        },
        secondary: {
            main: '#02140A',
        },
        backgroundGradient: {
            backgroundImage: 'linear-gradient(to bottom right, #af0000, #dc0202)',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h3: {
            fontSize: '1.875rem', 
            fontWeight: 400,
            color: '#ffffff', 
        },
        h4: {
            fontSize: '1.5rem', 
            fontWeight: 400,
            color: '#ffffff', 
        },
        h5: {
            fontSize: '1.25rem', 
            fontWeight: 400,
            color: '#ffffff', 
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            color: '#ffffff',
        },
        body2: {
            fontSize: '0.9rem',
            fontWeight: 400,
            color: '#888888',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '10px',
                    minWidth:'12rem',
                    minHeight:"2.5rem",
                    fontWeight:'600'
                },
            },
        },
    },
});

export default theme;
