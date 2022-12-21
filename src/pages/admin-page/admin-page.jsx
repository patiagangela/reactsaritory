
import {ColorModeContext, useMode} from '../../theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
// import {Link} from 'react-router-dom';
import Dashboard from '../../aaluis-admin-menu/Dashboard';
// import ExpiringItems from '../../aaluis-admin-menu/ExpiringItems';
// import ItemCategories from '../../aaluis-admin-menu/ItemCategories';
// import Items from '../../aaluis-admin-menu/Items';
// import TopProducts from '../../aaluis-admin-menu/TopProducts';

function AdminPage(){
    const [theme, colorMode] = useMode();
    return(
        <ColorModeContext.Provider value={colorMode}>
             <ThemeProvider theme={theme}>
                <CssBaseline/>
            <div className='app'>
                <Sidebar/>
            <main className="content">  
                <Topbar/>         
                <Routes>
                  <Route path = '/' element = {<Dashboard/>}/> 
                </Routes>
            </main> 
        </div>
       
                </ThemeProvider>
        </ColorModeContext.Provider>
    )
    }
    export default AdminPage;