import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={`/group/${props.group._id}`}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="group banner" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.group.name}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
