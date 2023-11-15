import React from 'react'
import { faLandMineOn, faLocationDot, faUserNinja, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const Details = ({ eventDetails }) => {
//     return (
//         <div>
//             <div className="detail-content-container  flex flex-col gap-3 text-center  ">
//                 {eventDetails.map((detail) => (
//                     <div key={detail.id} className='flex gap-2  font-inter justify-center items-center text-white'>
//                         {/* icon */}
//                         {/* Assuming you have an icon property in the detail object */}
//                         {detail.icon && <FontAwesomeIcon icon={detail.icon} size="sm" style={{ color: "#fff" }} />}
//                         {/* Head */}
//                         <span className='font-semibold'>{detail.type} : </span>
//                         {/* Detail */}
//                         <span>{detail.desc}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Details;



const Details = ({ eventDetails }) => {
    return (
        <div>
            <div className="detail-content-container  flex flex-col gap-3 text-center  ">
                <div className='flex gap-2  font-inter justify-center items-center text-white'>
                    {/* icon */}
                    <FontAwesomeIcon icon={faLocationDot} size="sm" style={{ color: "#fff", }} />
                    {/*Head */}
                    <span className='font-semibold'>{eventDetails[0].type} : </span>
                    {/*Detail */}
                    <span>{eventDetails[0].desc}</span>
                </div>
                <div className='flex gap-2  font-inter justify-center items-center text-white'>
                    {/* icon */}
                    <FontAwesomeIcon icon={faUserNinja} size="sm" style={{ color: "#fff", }} />
                    {/*Head */}
                    <span className='font-semibold'>{eventDetails[1].type}  : </span>
                    {/*Detail */}
                    <span>{eventDetails[1].desc} </span>
                </div>
                <div className='flex gap-2  font-inter justify-center items-center text-white'>
                    {/* icon */}
                    <FontAwesomeIcon icon={faUsers} size="sm" style={{ color: "#fff", }} />
                    {/*Head */}
                    <span className='font-semibold'>{eventDetails[2].type}  : </span>
                    {/*Detail */}
                    <span>{eventDetails[2].desc}</span>
                </div>
                <div className='flex gap-2  font-inter justify-center items-center text-white'>
                    {/* icon */}
                    <FontAwesomeIcon icon={faLandMineOn} size="sm" style={{ color: "#ffffff", }} />
                    {/*Head */}
                    <span className='font-semibold'>{eventDetails[3].type}  : </span>
                    {/*Detail */}
                    <span>{eventDetails[3].desc}</span>
                </div>
            </div>
        </div>
    )
}

export default Details