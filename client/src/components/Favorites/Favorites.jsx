import React from 'react';
import './Favorites.css';
import { BsHeart } from 'react-icons/bs'

function Favorites() {
  return (
    <div className='favorites-item__container'>
        <BsHeart className='heart__icon' />
        <h3 className="favorite-headline__text">MAKE IT A FAVORITE</h3>
        <p className="favorite__subtext">Add any meal from your recent order to your favorites to get it again. Fast.</p>
    </div>
  )
}

export default Favorites