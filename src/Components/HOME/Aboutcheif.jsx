import React from 'react';
import chef1 from '../../images/chef1.jpg';
import chef2 from '../../images/chef2.jpg';
import chef3 from '../../images/chef3.jpg';


const Aboutcheif = () => {
    return (
        <div className="aboutchef">
            <div className="aboutcheiftag">about our chefs</div>
            <div className="cheifgrid">
                <div className="grid1">
                    <img src={chef1} className="chefimg"></img>
                    <div className="chefname">sebastian lober</div>
                    <div className="chef_details"> Provide the highest and most efficient level of hospitality service to the hotel guests.Able to prepare and sells food within recommended time frames to meet Guest expectations.</div>
                </div>

                <div className="grid1">
                    <img src={chef2} className="chefimg"></img>
                    <div className="chefname">kevin hiben</div>
                    <div className="chef_details"> Provide the highest and most efficient level of hospitality service to the hotel guests.Able to prepare and sells food within recommended time frames to meet Guest expectations.</div>
                </div>

                <div className="grid1">
                    <img src={chef3} className="chefimg"></img>
                    <div className="chefname">corry runnells</div>
                    <div className="chef_details"> Provide the highest and most efficient level of hospitality service to the hotel guests.Able to prepare and sells food within recommended time frames to meet Guest expectations.</div>
                </div>
                {/* <div className="grid1">
                    <img src={chef2} className="chefimg"></img>
                    <div className="chefname">kevin</div>
                    <div className="chef_details"> Provide the highest and most </div>
                </div> */}
                {/* <div className="grid1">
                    <img src={chef3} className="chefimg"></img>
                    <div className="chefname">jeoge</div>
                </div> */}
              
            </div>
        </div>
    )
}

export default Aboutcheif
