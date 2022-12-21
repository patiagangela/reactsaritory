import {Link} from 'react-router-dom';
import {Box} from '@mui/material';
import HeaderTitle from '../../components/HeaderTitle';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import { ColorModeContext, useMode } from '../../theme';
import {CssBaseline, ThemeProvider} from '@mui/material';

function TodaysSales(){
  const [theme, colorMode] = useMode();
    return(
       
        <ColorModeContext.Provider value={colorMode}>
             <ThemeProvider theme={theme}>
                <CssBaseline/>
            <div className='app'>
                <Sidebar/>
            <main className="content">  
                <Topbar/>         
                <Box m='20px' display='flex' justifyContent='space-between' alignItems='center'>
                <HeaderTitle title = 'Todays Sales' subtitle='Welcome to your Todays Sales'/>
              </Box>
            </main> 
        </div>
       
                </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
export default TodaysSales;