import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import axios from 'axios';

function Navbar() {

    axios.defaults.withCredentials = true;

    // Checks status of whether user is or isn't logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoggedStatus = async () => {
            const token = localStorage.getItem('jwtToken');
            if (token) {
                const response = await axios.post('https://diss-deploy-test.vercel.app/is-logged-in', {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${ token }` },
                })
                setIsLoggedIn(response.data.isLoggedIn);
            } else {
                setIsLoggedIn(false)
            }
        }
        checkLoggedStatus();
    }, []);

    const handleSignOut = async () => {
        localStorage.removeItem('jwtToken'); // Remove JWT from local storage
        localStorage.removeItem('currentUser');
        setIsLoggedIn(false); // Update state to reflect logout
        window.location.href = '/';
    };


    const [click, setClicck] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClicck(!click);
    const closeMobileMenu = () => setClicck(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Anonymity Web App <i className='fa-solid fa-worm'/> 
                    </Link> 

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        
                        {/* Different Navbar links are rendered based on whether or not user is logged in */}
                        {isLoggedIn !== null ? (
                            isLoggedIn ? (
                                <>
                                    {/* Following items present when user is logged in */}
                                    <li className='nav-item'>
                                        <Link to='/my-account' className='nav-links' onClick={closeMobileMenu}>
                                            My Account
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/' className='nav-links-mobile' onClick={handleSignOut}>
                                            Sign Out
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    {/* Following items present when user is logged out */}
                                    <li className='nav-item'>
                                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                            About us
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                                            Sign In
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/create-account' className='nav-links-mobile' onClick={closeMobileMenu}>
                                            Create Account
                                        </Link>
                                    </li>
                                    
                                </>
                            )
                        ) : null(
                            <p>test</p>
                        )}
                    </ul>

                    {isLoggedIn !== null ? (
                        isLoggedIn ? (
                            <>
                                <div onClick={handleSignOut}>
                                    {button && <Button buttonStyle='btn--primary'>Sign Out</Button>}
                                </div>
                            </>                            
                        ) : (
                            <>
                                {button && <Button buttonStyle='btn--outline' path='/sign-in'>Sign In</Button>}
                                {button && <Button buttonStyle='btn--primary' path='/create-account'>Create account</Button>}
                            </>
                            

                        )) : null(
                            <>
                                {button && <Button buttonStyle='btn--outline' path='/sign-in'>Sign In</Button>}
                                {button && <Button buttonStyle='btn--primary' path='/create-account'>Create account</Button>}
                            </>
                        )}
                </div>

            </nav>
        </>
    )
}

export default Navbar
