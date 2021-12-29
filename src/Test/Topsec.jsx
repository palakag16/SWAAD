import React, { useEffect,useState } from 'react'

const Topsec = () => {
    const[green,updatelight]= useState(true);
    const[yellow,updateyellow]=useState(true);

 const getstate = (e)=>{
     
     const dot = e.target.parentElement.nextSibling;
     console.log(dot);
     
         if(dot.id=="dot1"){
             dot.classList.toggle('active');
             updatelight(!green)
         }
         else if(dot.id="dot2"){
             dot.classList.toggle('activeegg');
             updateyellow(!yellow)
         }
 }
  
    return (
        <div className="topsec">
            <div className="backbutton">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="address_sec">
                <div className="adress_area">Lunch Box - Rajajinagar</div>
                <div className="address_city">Rajajinagar, Banglore</div>
            </div>

            <div className="searchsec">
                <i class="fa fa-search" aria-hidden="true"></i> <input type="text" className="searchinput"></input>
            </div>

           <div className="switchsec">
           <label class="switch">
                <input type="checkbox" onClick={getstate} id="checkbox1"/>
                <span class="slider round"></span>
            </label>
                <div className="dot" id="dot1"></div>
                <div className="spantext">veg only</div>
           
           </div>

           <div className="switchsec">
           <label class="switch" >
                <input type="checkbox" onClick={getstate} id="checkbox2"/>
                <span class="slider round"></span>
            </label>
                <div className="dot" id="dot2"></div>
                <div className="spantext">includes egg</div>
           
           </div>
        </div>
    )
}

export default Topsec
