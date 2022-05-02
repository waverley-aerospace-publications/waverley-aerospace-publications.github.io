import React from "react";

export function Card({ image, title, description, price }) {

    const pounds = new Intl.NumberFormat(`en-US`, {
        currency: `GBP`,
        style: 'currency',
      }).format(price);

    return (
        <div className=' mb-16 bg-white py-4'>
            <div className='border-t-4 border-b-4 border-blue-200 relative py-6 mx-auto w-10/12'>
                <h2 className='w-max pr-2 absolute -top-3 bg-white font-bold'>
                    {title}
                </h2>
                <div className=' w-full mx-auto'>
                    <img src={image} />
                </div>
                <div className='pt-6'>
                    <p>{description}</p>
                </div>
                <h2 className='w-max pr-2 absolute -bottom-4 bg-white font-bold'>
                    {pounds}
                </h2>
            </div>
        </div>
  )
}
  