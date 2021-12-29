import React from 'react';
import { useHistory } from 'react-router';

const Orderplaced = () => {
    const history=useHistory();
    return (
        <>
        <div className="order_placed">
            Thankyou for ordering. your food will be deliver soon
        </div>
        <div className="backhome">
            <div onClick={()=>history.push('/')}>Back Home</div>
        </div>
        </>

    )
}

export default Orderplaced
