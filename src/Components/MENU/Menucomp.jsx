import React,{useEffect,useState} from 'react'
import img from "../../images/newb.jpg";
import Order from '../Order_Online/Order';
const Menucomp = ({categ}) => {
    const [menu,updatemenu]=useState([]);
    useEffect(() => {
     const filteredmenu = Order.filter((el)=>{
         return el.menu_categ==categ;
     });
     updatemenu(filteredmenu)
     console.log(filteredmenu,"filteres")
    }, [])
    // console.log(menu,"meny")
    return (
        <div>
          <div className="maintitlesec">
                <div className="menuname">
                    <div className="line"></div>
                    <div className="menuitemsname">{categ}</div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="main_menu_section">
           { menu.map((el)=>{
               return  <div className="menuitemone">
                <img src={el.img?el.img:img} className="menuimg"></img>
                <div className="menuitem">
                    <div className="menunametitle">{el.name}</div>

                    <div className="menudescription"> {el.desciption} </div>
                </div>
                <div className="price">&#8377;{el.price}</div>
            </div> 
            })}


            </div>
            
        </div>
    )
}

export default Menucomp
