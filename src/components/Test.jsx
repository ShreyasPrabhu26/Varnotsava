import { faDisease, faEnvelope, faExclamation, faLandMineOn, faLocationDot, faPhoneVolume, faUserNinja, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Test = () => {
    return (<>
        <div className="bg-blue-200 flex flex-col ">
            <span className='font-semibold text-xl'>Shreyas Prabhu</span>
            <span className="span flex gap-2 items-center justify-start">
                <FontAwesomeIcon icon={faEnvelope} size="sm" style={{ color: "#f5f5f5", }} />
                <span className='font-semibold'>shreyasprabhu26@gmail.com</span>
            </span>
            <span className="span flex gap-2 items-center justify-start">
                <FontAwesomeIcon icon={faPhoneVolume} size="sm" style={{ color: "#ffffff", }} />
                <span className='font-semibold'>9906766767</span>
            </span>
        </div>
    </>
    )
}

export default Test