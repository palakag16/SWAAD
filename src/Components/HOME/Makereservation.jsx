import React from 'react';
import { useHistory } from 'react-router';

const Makereservation = () => {
    const history = useHistory();
    return (
        <div className="makeReservation">
           <div className="reservationtag">Book you table now</div>
           <div className="reservebtn" onClick={()=>history.push('/reservation')}>Make Reservation</div>
        </div>
    )
}

export default Makereservation
