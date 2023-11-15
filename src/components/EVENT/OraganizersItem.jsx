import React from 'react';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OraganizersItem = ({ name, email, phone }) => {
  return (
    <div className="bg-blue-400 flex flex-col p-3 rounded-md w-[95%]">
      <span className='font-semibold text-xl'>{name}</span>
      <div className="flex gap-2 items-center justify-start">
        <FontAwesomeIcon icon={faEnvelope} size="sm" style={{ color: "#f5f5f5", }} />
        <a href={`mailto:${email}`} className='font-semibold'>{email}</a>
      </div>
      <div className="flex gap-2 items-center justify-start">
        <FontAwesomeIcon icon={faPhoneVolume} size="sm" style={{ color: "#ffffff", }} />
        <a href={`tel:${phone}`} className='font-semibold'>{phone}</a>
      </div>
    </div>
  );
}

export default OraganizersItem;
