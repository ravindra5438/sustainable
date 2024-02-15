
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom'; 
import ProjectRoutes from './routes/Routes'; 
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    appContainer: {
        textAlign: 'center',
        height: '100vh',
        ...theme.palette.backgroundGradient,
    },
}));
function App() {
  const classes=useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className={classes.appContainer}>
                    {"sustainable disciple"}
                    <ProjectRoutes />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
