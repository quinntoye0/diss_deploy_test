import React, {useState, useEffect} from 'react';
import'../../App.css';
import SplashScreen from '../SplashScreen';
import LoggedInSplash from '../LoggedInSplash';
import Footer from '../Footer';
import Cards from '../Cards';

function Home () {

    // Checks status of whether user is or isn't logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            fetch('http://localhost:9000/is-logged-in', {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(response => response.json())
            .then(data => setIsLoggedIn(data.isLoggedIn)) // Parse response for login status
            .catch(error => console.error('Error fetching login status:', error));
        } else {
            setIsLoggedIn(false)
        }
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
