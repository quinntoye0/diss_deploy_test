import React, {useState, useEffect} from 'react';
import'../../App.css';
import SplashScreen from '../SplashScreen';
import LoggedInSplash from '../LoggedInSplash';
import Footer from '../Footer';
import Cards from '../Cards';
import axios from 'axios';

function Home () {

    // Checks status of whether user is or isn't logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const checkLoggedStatus = async () => {
            const token = localStorage.getItem('jwtToken');
            if (token) {
                const response = await axios.post('https://diss-deploy-test.vercel.app/is-logged-in', {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${token}` },
                })
                setIsLoggedIn(response.data.isLoggedIn);
            } else {
                setIsLoggedIn(false)
            }
        }
        checkLoggedStatus()
    }, []);

    return (
        
        <>
            {isLoggedIn !== null ? (
                isLoggedIn ? (
                    <>
                        <LoggedInSplash />
                        <Cards/>
                    </>
                ) : (
                    <>
                        <SplashScreen />
                        <Footer />
                    </>                    
                )
            ) : null(
                    <p>test</p>
            )}
        </>
    );
}

export default Home;
