import React, { useContext, useMemo,useState } from 'react';
import { cart_toggle } from './OrderNow';
import Cart from './Cart';

const Ordermenu = () => {
    const { setstate, uniqueList, tagList, getFilterbytag, getFilteredItems, menuItems, addToCart, cartitems } = useContext(cart_toggle);

    const[showcart,updateshow]=useState(true);
    return (
        <div className={cartitems.length>0?'gridCart':'nill'}>
            <div className="main_order_sec">

                <div className="cuisine_categlist" id="cuisine_categlist">
                    {uniqueList.map((el) => {
                        return <div className="cuisine_type_item" onClick={(e) => getFilteredItems(el, e)}>{el}</div>
                    })}
                </div>


                <div className="main_right_sec">
                    <div className="filter_sec" id="filter_sec">
                        {tagList.map((el) => {
                            return <div className="filter_tileone" onClick={(e) => getFilterbytag(el, e)}>{el}</div>
                        })}

                    </div>


                    <div className="main_menu_grid">
                        {menuItems.map((el) => {

                            return <div className="menu_one" key={el.id}>
                                <img src={el.img} className="main_menu_image"></img>
                                <div className="mainmenu_title">{el.name}</div>
                                <div className="food_pricesection">
                                    {(el.logocateg == "veg") ? <div className="veglogo"> <div className="veglogocircle"></div></div> : (el.logocateg == "egg") ? <div className="egglogo"> <div className="egglogocircle"></div></div> : <div className="non_veglogo"> <div className="non_veglogocircle"></div></div>}
                                    <div className="greydot"></div>
                                    <div className="food_price">&#8377;{el.price}</div>
                                </div>
                                <div className="customize_sec"  >
                                    <i class="fas fa-utensils"></i> <div className="customize" >custumizable</div>
                                </div>
                                {el.add == "ADDED" ? <div className="activeaddbtn addbtn">{el.add}</div> : <div className="addbtn" onClick={(e) => { addToCart(e, el.id) }}> {el.add}</div>}
                            </div>
                        })}
                    </div>

                </div>
            </div>
            {cartitems.length>0?<Cart/>:<div></div>}

        </div>
    )
}

export default Ordermenu
