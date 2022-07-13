import { Fragment } from 'react';
import '../css/bootstrap.min.css';
import Finf from './Finf';
function Navbar(){
    return(
        
        <div className="container-fluid px-0">
            <ul className='nav nav-fill bg-success py-2'>
            <li className='nav-item'><a href="/create" className='nav-link text-light btn btn-danger'>HOME</a></li>
            <li className='nav-item'><a href="/create" className='nav-link text-light'>CONTACT US</a></li>
            <li className='nav-item'><a href="/create" className='nav-link text-light'>REGISTER</a></li>
            <li className='nav-item'><a href="/create" className='nav-link text-light'>LOGIN</a></li>
            </ul>
        </div>
        
    );
    
}
export default Navbar;