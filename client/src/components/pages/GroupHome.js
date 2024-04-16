import React, { useState, useEffect } from 'react'
import GroupSplash from '../GroupSplash'
import Footer from '../Footer'


function GroupHome() {

    // Checks status of whether user is or isn't logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const checkLoggedStatus = async () => {
                try {
                    const response = await fetch('http://localhost:9000/is-logged-in', {
                        method: 'POST',
                        headers: { Authorization: `Bearer ${ token }` },
                    })
                    const data = await response.json();
                    setIsLoggedIn(data.isLoggedIn);
                } catch (error) {
                    console.error('Error fetching login status:', error);
                    window.location.href('/');
                }                
            };    
            checkLoggedStatus();
        } else {
            window.location.href('/');
        }
    }, []);

    return (

        <>
            {isLoggedIn !== null ? (
                isLoggedIn ? (
                    <>
                        <GroupSplash />
                        <Footer />
                    </>
                ) : (
                    <>
                        <div>Loading...</div>
                    </>
                )
            ) : null(
                <div>Loading...</div>
            )}
        </>
    );
}

export default GroupHome
