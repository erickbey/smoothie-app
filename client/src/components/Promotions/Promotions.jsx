import React from 'react';
import './Promotions.css';
import catering from '../../assets/catering.jpg';
import groupOrder from '../../assets/group-order.jpg';

function Promotions() {
  return (
    <div>
        <h2 className='promotion__header'>Crowd Pleasers</h2>

        <div className='promotion__container'>
        <div className="promotion-item__container">
            <div className="promotion-image__container">
                <div className="subheader__centering">
                    <div className="promotion__subheader">CATERING</div>
                </div>
                <img src={catering} alt="catering" className='promotions__image'/>
            </div>
            <div className="promotion__text">
                <p>From 6 to 200 people Starting at $6.25* / person</p>
                <p>Build Your Own Smoothies by the Box</p>
                <p>Requires 24 hours notice</p>
            </div>
            <div className="promotion__btn">
                <p>EXPLORE CATERING</p>
            </div>
        </div>

        <div className="promotion-item__container">
            <div className="promotion-image__container">
            <div className="promotion__subheader">GROUP ORDER</div>
                <img src={groupOrder} alt="group order" className='promotions__image'/>
            </div>
            <div className="promotion__text">
                <p>Invite up to 20 people  Normal menu pricing</p>
                <p>Full menu | Personalized meals | Organizer pays</p>
                <p>Order and eat today</p>
            </div>
            <div className="promotion__btn">
                <p>START ORDER NOW</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Promotions