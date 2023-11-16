import React from 'react';

const OraganizersItem = ({ name, email, phone }) => {
  return (
    <div className="bg-blue-400 flex flex-col p-3 rounded-md w-[95%]">
      <span className='font-semibold text-xl'>{name}</span>
      <div className="flex gap-2 items-center justify-start">
        <i class="fa-regular fa-envelope fa-sm" style="color: #ffffff;"></i>
        <a href={`mailto:${email}`} className='font-semibold'>{email}</a>
      </div>
      <div className="flex gap-2 items-center justify-start">
        <i class="fa-solid fa-phone-volume" style="color: #ffffff;"></i>
        <a href={`tel:${phone}`} className='font-semibold'>{phone}</a>
      </div>
    </div>
  );
}

export default OraganizersItem;
