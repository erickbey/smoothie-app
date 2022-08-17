import React from 'react';
import './Orders.css';
import smoothie from '../../assets/smoothie.png';
import smoothieBowl from '../../assets/smoothie-bowl.png';
import milkshake from '../../assets/milkshake.png';
import veganMilkshake from '../../assets/vegan-milkshake.png';
import juice from '../../assets/juice.png';

function Orders() {
  return (
    <div className='orders-items__container'>
        <div className="order-item__container">
            <img className='orders__image' src={smoothie} alt="smoothie" />
            <h3 className='orders-header__text'>Smoothie</h3>
        </div>

        <div className="order-item__container">
            <img className='orders__image' src={smoothieBowl} alt="smoothie bowl" style={{'objectFit': 'contain'}}/>
            <h3 className='orders-header__text'>Smoothie Bowl</h3>
        </div>

        <div className="order-item__container">
            <img className='orders__image' src={milkshake} alt="milkshake" />
            <h3 className='orders-header__text'>Milkshake</h3>
        </div>

        <div className="order-item__container">
            <img className='orders__image' src={veganMilkshake} alt="veganmilkshake" />
            <h3 className='orders-header__text'>Vegan Milkshake</h3>
        </div>

        <div className="order-item__container">
            <img className='orders__image' src={juice} alt="juice" style={{'objectFit': 'contain'}}/>
            <h3 className='orders-header__text'>Cactus Juice</h3>
        </div>
    </div>
  )
}

export default Orders