import {Link} from 'react-router-dom';

function LandingPage(){
    return(
        <div>
            <h1>Landing Page Here</h1>
            <Link to="/loginpage" class="btn btn-success">login here</Link> <br/> <br/>
            <Link to="/registerpage" class="btn btn-success">Register here</Link>
        </div>
    )
}
export default LandingPage;