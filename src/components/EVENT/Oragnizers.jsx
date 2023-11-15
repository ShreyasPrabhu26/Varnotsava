import React from 'react'
import OraganizersItem from './OraganizersItem'

const Oragnizers = ({ oragnizers }) => {
    return (
        <div className="organizers-container flex flex-col gap-5 items-center">
            {oragnizers.map((oragnizer) => (
                <OraganizersItem
                    key={oragnizer.id}
                    name={oragnizer.name}
                    email={oragnizer.email}
                    phone={oragnizer.phone}
                />
            ))}
        </div>
    )
}

export default Oragnizers