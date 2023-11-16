import React from 'react'

const Details = ({ eventDetails, className = "detail-content-container" }) => {
    return (
        <div>
            <div className={`${className} flex flex-col gap-3 text-center `}>
                {eventDetails.map((detail) => (
                    <div key={detail.id} className='flex gap-2  font-inter justify-center items-center text-white'>
                        {/* icon */}
                        {<i className={`fa-solid ${detail.icon}`}></i>}
                        {/* Head */}
                        <span className='font-semibold'>{detail.type} : </span>
                        {/* Detail */}
                        <span>{detail.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Details;

