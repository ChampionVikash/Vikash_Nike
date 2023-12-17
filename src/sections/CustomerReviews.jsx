import React from 'react'
import {reviews} from "../constants"
import  Rating  from "../components/Rating";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
      What Our 
      <span className='text-coral-red'> Customers </span> 
      Say?
      </h3>
      <p className='max-w-lg m-auto mt-4 text-center info-text'>
      Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>

      <div className='flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <Rating
           key={index}
           {...review}
          />
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews