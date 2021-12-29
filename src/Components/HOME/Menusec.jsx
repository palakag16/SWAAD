import React from 'react';
import Order from '../Order_Online/Order';
import { useHistory } from 'react-router';
const Menusec = () => {
    const history = useHistory();
    return (
        <div className="menusec">
            <div className="home_menu_sec">
                <div className="line1"></div>
                <div className="home_menutitle"> our menu</div>
                <div className="line1"></div>
            </div>
            <div className="discover_bs"> Discover our popular Items</div>

            <div className="menu_items">
                {Order.map((el) => {
                    return <div className="menu_item1">
                        <div className="menu_details">
                            <div className="menu_name"> {el.name}</div>
                            <div className="menu_desc">{el.desciption}</div>
                        </div>
                        <div className="items_price">&#x20B9;{el.price}</div>
                    </div>
                })}

            </div>
            <div className="complete_menu" onClick={()=>history.push('/menu')}>Complete Menu</div>
        </div>
    )
}

export default Menusec
