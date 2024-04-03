import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {

    const [returnedGroups, setReturnedGroups] = useState([]);
    useEffect(() => {

        const fetchGroups = async () => {
            const userID = localStorage.getItem('currentUser');
            const response = await fetch('http://localhost:9000/retrieve-user-groups', {
                method: 'POST',
                headers: { Authorization: `Bearer ${ userID }` },
            })
            .then( (response) => response.json());
            // const data = await response.json();
            setReturnedGroups(response); // Set state with the first element from the response arra
        };    
        fetchGroups();
    }, []);


  return (
    <div className="cards">
        <h1>Temppp title - to be pulled from db</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {returnedGroups && returnedGroups.map((returnedGroup) => (
                        <CardItem 
                            src='/images/home-img.jpg'
                            label='Group Tag'
                            group={returnedGroup}
                        />
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
