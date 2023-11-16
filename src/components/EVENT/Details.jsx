import React from 'react'

const Details = ({ eventDetails, className = "detail-content-container" }) => {
    return (
        <div>
            <div className={`${className} flex flex-col gap-3  `}>
                {eventDetails.map((detail) => (
                    <div key={detail.id} className='flex gap-2  font-inter justify-start items-center text-white'>
                        {/* icon */}
                        {<i className={`fa-solid ${detail.icon} fa-sm style=color: #ffffff;`}></i>}
                        {/* Head */}
                        <span className='font-semibold'>{detail.type} : </span>
                        {/* Detail */}
                        <span>{detail.desc}</span>
                    </div>
                ))}
                <button className='bg-indigo-500 w-full p-1 rounded-md hover:scale-105 duration-200'>Register</button>
            </div>
        </div>
    );
}

export default Details;

