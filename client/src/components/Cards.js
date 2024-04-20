import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {

    const [returnedGroups, setReturnedGroups] = useState([]);
    useEffect(() => {

        const fetchGroups = async () => {
            const userID = localStorage.getItem('currentUser');
            const response = await fetch('https://diss-deploy-test.vercel.app/retrieve-user-groups', {
                method: 'POST',
                headers: { Authorization: `Bearer ${ userID }` },
            })
            .then( (response) => response.json());
            setReturnedGroups(response);
        };    
        fetchGroups();
    }, []);


  return (
    <div className="cards">
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
