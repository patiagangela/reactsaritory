import {Link} from 'react-router-dom';
import Topbar from '../../components/Topbar';
import { ColorModeContext, useMode } from '../../theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import LandingPageNavbar from '../../components/LandingPageNavbar';
import Sarisaristore from '../../aaangela-landingpage/Sarisaristore';
import About from '../../aaangela-landingpage/About';
import Features from '../../aaangela-landingpage/Features';
import Footer from '../../aaangela-landingpage/Footer';
import Reviews from '../../aaangela-landingpage/Reviews';
import Copyright from '../../aaangela-landingpage/Copyright';




function LandingPage(){
    const [theme, colorMode] = useMode();
    return(
        <ColorModeContext.Provider value={colorMode}>
             <ThemeProvider theme={theme}>
                <CssBaseline/>
            <div className='app'>
                
            <main className="content">  
                <LandingPageNavbar/> 
                <Sarisaristore/>
                <About/>
                <Features/>
                <Reviews/>
                <Footer/>
                <Copyright/>
                <div className='container-fluid'>
               
                </div>  
                     
             {/* <Link to="/loginpage" class="btn btn-success">login here</Link> <br/> <br/>
             <Link to="/registerpage" class="btn btn-success">Register here</Link>       */}
                
            </main> 
        </div>
       
                </ThemeProvider>
        </ColorModeContext.Provider>
       
    )
}
export default LandingPage;
