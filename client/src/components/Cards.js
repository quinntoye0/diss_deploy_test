import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
import './Cards.css'
import axios from 'axios';

function Cards() {

    axios.defaults.withCredentials = true;

    const [returnedGroups, setReturnedGroups] = useState([]);
    useEffect(() => {

        const fetchGroups = async () => {
            const userID = localStorage.getItem('currentUser');
            const response = await axios.post('https://diss-deploy-test.vercel.app/retrieve-user-groups', {
                method: 'POST',
                headers: { Authorization: `Bearer ${ userID }` },
            })
            setReturnedGroups(response.data);
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
