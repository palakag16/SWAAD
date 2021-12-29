import React,{useEffect,useState} from 'react';
import img from "../../images/newb.jpg";
import Order from '../Order_Online/Order';
import Menucomp from './Menucomp';

const Menu = () => {
    const[menufilter,updatefilter]= useState([])

   useEffect(() => {
       const filtercateg = [...new Set(Order.map((el)=>{
             return el.menu_categ
       }))]
       updatefilter(filtercateg)
   }, [])

    return (
        <div className="menu">
        {menufilter.map((el)=>{
            return <Menucomp categ={el}/>
        })}
        
            {/* <div className="maintitlesec">
                <div className="menuname">
                    <div className="line"></div>
                    <div className="menuitemsname">appetizer</div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="main_menu_section">
           { Order.map((el)=>{
               return  <div className="menuitemone">
                <img src={el.img?el.img:img} className="menuimg"></img>
                <div className="menuitem">
                    <div className="menunametitle">{el.name}</div>

                    <div className="menudescription"> {el.desciption} </div>
                </div>
                <div className="price">&#8377;{el.price}</div>
            </div> 
            })}


            </div> */}
        </div>
    )
}

export default Menu
