import {Link} from 'react-router-dom';

function RegisterPage(){
    return(
        <div>
            <h1>Register Page Here</h1>
            <Link to="/loginpage" class="btn btn-success">Login</Link>
        </div>
    )
}
export default RegisterPage;