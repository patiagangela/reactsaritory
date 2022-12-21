import {Link} from 'react-router-dom';
import {Box} from '@mui/material';
import HeaderTitle from '../components/HeaderTitle';

function Dashboard(){
    return(
        <div>
           <Box m='20px'>
             <Box display='flex' justifyContent='space-between' alignItems='center'>
                <HeaderTitle title = 'DASHBOARD' subtitle='Welcome to your dashboard'/>
                
                <Link to="/" class="btn btn-success">Log Out</Link>
             </Box>
          </Box>
        </div>
    )
}
export default Dashboard;