import React from 'react';
import EventCardUnit from '../components/EVENT/EventCardUnit';

const Events = () => {
    const eventDetail = [
        {
            id: 1,
            img: "/images/logo.png",
            name: "Event Name",
            eventSubDetails: [
                {
                    id: 1,
                    type: "Venue",
                    icon: "fa-location-dot",
                    desc: "Seminar Hall",
                },
                {
                    id: 2,
                    icon: "fa-user-ninja",
                    type: "Event Type",
                    desc: "Technical",
                },
                {
                    id: 3,
                    icon: "fa-users",
                    type: "Team Size",
                    desc: "89",
                },
                {
                    id: 4,
                    icon: "fa-land-mine-on",
                    type: "Maximum Participants",
                    desc: "99",
                },
            ],
        },
    ];
    return (
        <>
            <div className="event-list-page h-screen w-screen flex flex-col gap-14 justify-start items-center ">
                <h1 className='font-Rockybilly mt-16 text-4xl '>Events</h1>
                <span className='font-inter bg-blue-300 p-3 text-sm md:text-base  whitespace-nowrap rounded-lg '>60+ Events: Dive into Limitless Fun and Adventure!</span>
                <div className="event-lists bg-blue-300  w-screen  rounded-md flex justify-start items-start">
                    <div className="event-list-sub w-full m-4 rounded-md flex flex-col flex-wrap md:flex-row  justify-center items-center gap-7">
                        <EventCardUnit eventDetail={eventDetail} />
                        <EventCardUnit eventDetail={eventDetail} />
                        <EventCardUnit eventDetail={eventDetail} />
                        <EventCardUnit eventDetail={eventDetail} />
                        <EventCardUnit eventDetail={eventDetail} />
                        <EventCardUnit eventDetail={eventDetail} />
                        <EventCardUnit eventDetail={eventDetail} />
                        <EventCardUnit eventDetail={eventDetail} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;
