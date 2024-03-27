import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h1>Temppp title - to be pulled from db</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src='/images/home-img.jpg'
                        text='temp text group desc tbd'
                        label='Group Tag'
                        path='/group' 
                    />
                    <CardItem 
                        src='/images/card-img.jpg'
                        text='different group desc tbd'
                        label='Different Group Tag'
                        path='/group' 
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
