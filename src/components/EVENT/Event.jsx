import React from 'react'
import Oragnizers from './Oragnizers'
import Details from './Details'
import EventItem from './EventItem'

const Event = () => {
    const eventInformation = [
        {
            id: 1,
            eventName: "Bruhh",
            img: "/images/logo.png",
            eventDesc: "Lorem ipsum dolor sit amet conse",
            rules: ["● This is a team event with each team consisting of only 2 members.",
                "● All the teammates are required to be present for further rounds",
                "● Use of the internet or any kind ofexternal reading materials/ textbookswill be strictly prohibited.",
                "● College ID is compulsory.",
                " ● Organizers will contact the teamsselected for higher rounds."]
        },
    ]

    const eventDetails = [
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
            type: "Maximum Participants ",
            desc: "99",
        }]

    const oragnizers = [{
        id: 1,
        name: "Shreyas Prabhu",
        email: "shreyasprabhu26@gmail.com",
        phone: "9906766767"
    },
    {
        id: 1,
        name: "Shreyas Prabhu",
        email: "shreyasprabhu26@gmail.com",
        phone: "9906766767"
    },
    ]

    return (<>
        <div className="flex flex-col md:flex-r gap-6 font-inter bg-blue-300 p-5 rounded md:flex-row">
            {eventInformation.map((eventInfo) =>
            (
                <EventItem eventInfo={eventInfo} />
            )
            )}

            {/* DETAILS */}
            <div className='event-details bg-blue-200  rounded-md flex flex-col items-center w-ful md:w-[30%]'>
                <span className='font-semibold font-Rockybilly tracking-wider mt-8 mb-5'>Details</span>
                {/* EVENT-INFO */}
                <div className="p-4 bg-blue-100 rounded-md">
                    <Details eventDetails={eventDetails} />
                </div>
                {/* ORGANIZERS */}
                <span className='font-semibold font-inter tracking-wider mt-8 mb-5 text-2xl bg-blue-300 p-3 rounded-md'>ORGANIZERS</span>
                {/* ORGANIZERS-items */}
                <div className="organizer-container w-[95%]">
                    <Oragnizers oragnizers={oragnizers} />
                </div>
            </div>
        </div>
    </>
    )
}

export default Event