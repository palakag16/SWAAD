import React from 'react';
import imgsrc from '../../images/n2.jpg';
import {useHistory} from 'react-router'

const Homebanner = () => {
    const history = useHistory();

    return (
        <div className="homebanner">
    
            <div className="about_home_banner">
                <div className="welcome_home_tag">Welcome</div>
                <div className="welcome_line">We welcome you to a delicious feast of exquisite dishes in Star line. With a wide range of world cuisines to
                    choose from, we guarantee you a sumptuous feast experience in our restaurant.</div>
                <div className="buttons">
                    <div className="btn_item" onClick={()=>history.push('/menu')}> view menu</div>
                     {/* <div className="btn_item"> make reservation</div> */}
                     <div className="btn_item" onClick={()=>history.push('/reservation')}> make Reservation</div>
                </div>
            </div>
            <div className="imgsec">
                <img src={imgsrc} className="bgimg" ></img>
            </div>
        </div>
    )
}

export default Homebanner;
