import React from 'react'

const EventItem = ({ eventInfo }) => {
    return (
        <div className='event-main-body flex flex-col gap-6 bg-blue-200 p-5 rounded-md md:w-[80%]' key={eventInfo.id}>
            <img src={eventInfo.img} className='rounded-md w-full md:h-[50%]' alt="Event" />
            <h1 className='font-bold text-3xl'><strong>{eventInfo.eventName}</strong></h1>
            <h2 className='mb-[-20px] font-semibold text-xl'>Event Description:</h2>
            <p>{eventInfo.eventDesc}</p>
            <h2 className='font-semibold underline text-xl'>Rules and Regulations:</h2>
            <p>
                {eventInfo.rules.map((rule, index) => (
                    <>
                        <p p key={index} > {rule}</p>
                        {index !== eventInfo.rules.length - 1 && <br />}
                    </>
                ))}
            </p>
        </div>
    )
}

export default EventItem