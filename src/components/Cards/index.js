import React from 'react';
import './index.css';
import CardItem from '../CardsItems';

const Cards = () =>{
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.holidify.com/images/cmsuploads/compressed/tovp-night-view_1920x1080_20200226130932.jpg'
              text='Explore the hidden waterfall deep inside the Mayapur'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://ci6.googleusercontent.com/proxy/EmQo9sOCcbljeKzcLjt0v5K2QbRLKGY4pGFxWslprL4pS1ueyynjP56FtYoCSrGg9fQiFGHSm3SRQzKdhVlb6bI1ih3XQD3V9GHQqCA0r5Ssdi_3fRmmXw=s0-d-e1-ft'
              text='Travel through the hills near ahobilam'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.trawell.in/admin/images/upload/135648441Jwala_Main.jpg'
              text='Travel through the ahobilam visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://i.ytimg.com/vi/_JWfHWPgsrU/maxresdefault.jpg'
              text='Puri beachPuri Beach is a beach in the city of Puri in the state of Odisha, India. It is on the shore of the Bay of Bengal.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://media-cdn.tripadvisor.com/media/photo-m/1280/13/77/c5/b6/kanyakumari-chothavilai.jpg'
              text='The Virgin Princess is a town in Kanyakumari tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;