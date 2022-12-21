import {Link} from 'react-router-dom';

function LoginPage(){
    return(
        <div>
            <h1>Login Page Here</h1>
            <Link to="/registerpage" class="btn btn-success">Register here</Link><br /><br />
            <Link to="/adminpage" class="btn btn-success">Dashboard</Link>
        </div>
    )
}
export default LoginPage;