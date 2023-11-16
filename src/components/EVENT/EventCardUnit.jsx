import React from 'react';
import Details from './EVENT/Details';

const EventCardUnit = () => {
    const eventDetail = [
        {
            id: 1,
            img: "/images/logo.png",
            name: "Incredia",
            eventSubDetails: [
                {
                    id: 1,
                    type: "Venue",
                    icon: "faLocationDot",
                    desc: "Seminar Hall",
                },
                {
                    id: 2,
                    icon: "faUserNinja",
                    type: "Event Type",
                    desc: "Technical",
                },
                {
                    id: 3,
                    icon: "faUsers",
                    type: "Team Size",
                    desc: "89",
                },
                {
                    id: 4,
                    icon: "faLandMineOn",
                    type: "Maximum Participants",
                    desc: "99",
                },
            ],
        },
    ];

    return (
        <>
            {eventDetail.map((eventItem) => (
                <div key={eventItem.id} className="event-item-container flex flex-col gap-3 bg-blue-200 w-56 rounded-lg p-3 text-center m-auto mt-8 items-center justify-center">
                    <img src={eventItem.img} className='rounded-md event-item-child' alt="" />
                    <div className="event-item-details">
                        <span className='font-semibold'>{eventItem.name}</span>
                        <div className="">
                            <Details eventDetails={eventItem.eventSubDetails} className={`event-card-sub-details flex items-center justify-center`} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default EventCardUnit;
