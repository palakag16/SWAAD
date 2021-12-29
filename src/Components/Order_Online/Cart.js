import React, { useState, useMemo, useContext, useRef } from 'react'
import { cart_toggle } from './OrderNow';
import Ordermenu from './Ordermenu';
import img1 from '../../images/foodimg.jpg';
import Orderplaced from './Orderplaced';
import { useHistory } from 'react-router';

const Cart = () => {
    const { cartitems, delBtn, addItem, removeItem } = useContext(cart_toggle)
    const [sum, updatesum] = useState();
    const [quant, updatequant] = useState();
    const[placed,updateplaced] = useState(false);
    const d = new Date();
    const random = d.getTime().toString();
    const id = random.substring(random.length - 5);

    const history = useHistory();
    const ref = useRef(id)


    useMemo(() => {

        let totalamount = cartitems.reduce((acc, val) => {
            const quantity = val.quantity;
            const price = val.price;
            let updateprice = quantity * price;
            acc += updateprice;
            return acc;
        }, 0)
        updatesum(totalamount);
    }, [cartitems])

    useMemo(() => {
        let totalquant = cartitems.reduce((acc, val) => {
            const quantity = val.quantity;
            return acc += quantity;
        }, 0)

        updatequant(totalquant);

    }, [cartitems])

    const tax = sum * 5 / 100;
    const getyourorderplaced = ()=>{
        if(sum>0&&cartitems.length>0){
            history.push('/orderplaced')
        }
        else{
            history.push('/order')
        }
    }

    return (
        <div className="cartsection">
            {/* <div><Ordermenu /></div> */}
            <div className="cartdiv">
                {/* <div className="totalquant"> <span>{quant} total items</span></div> */}
                <div className="my_order">My Orders({quant})</div>
                <div className="order_id">Order Id - #SWD{ref.current}</div>
                <div className="menu_grid_wrapper">
                <div className="main_menu_grid cart_menu_grid">
                    {cartitems.map((els) => {
                        return <div className="menu_one cart_one" key={els.id}>
                            
                            <div className="cart_img"><img src={els.img} alt="alt" className="cartimg"></img></div>
                            <div className="cart_left_sec">
                                <div className="cart_title">{els.name}</div>
                                <div>&#8377;<span className="food_price">{els.price}</span></div>

                            </div>
                            <div className="dish_type">
                            {(els.logocateg=="veg")?<div className="veglogo"> <div className="veglogocircle"></div></div>:(els.logocateg=="egg")?<div className="egglogo"> <div className="egglogocircle"></div></div>:<div className="non_veglogo"> <div className="non_veglogocircle"></div></div>}
                            </div>

                            <div className="add_del_btn">

                                {els.quantity > 1 ?
                                    <div onClick={() => removeItem(els.id)} className="cart_btns">-</div> :
                                    <div onClick={() => { delBtn(els.id) }} className="cart_btns del_btn">del</div>}
                                <div>{els.quantity}</div>
                                <div onClick={() => addItem(els.id)} className="cart_btns">+</div>

                            </div>


                        </div>
                    })}
                </div>
                </div>

                <div className="total_section">
                    <div className="sub_totalsec">
                        <div className="total_name">subtotal</div>
                        <div className="sub_prices">&#8377;{sum}</div>
                    </div>
                    <div className="sub_totalsec">
                        <div className="total_name">Discount(0%)</div>
                        <div className="sub_prices">&#8377;0</div>
                    </div>
                    <div className="sub_totalsec">
                        <div className="total_name">Tax</div>
                        <div className="sub_prices">&#8377;{tax}</div>
                    </div>
                    <div className="sub_totalsec total_amt">
                        <div className="total_bold">Total</div>
                        <div className="total_bold sub_price">&#8377;<span>{sum + tax}</span></div>
                    </div>
                </div>
                <div className="total_amount">
                    {/* <div className="sum_total">Total Amount  */}
                    {/* <div>&#8377;{sum+tax}</div></div> */}
                    <div className="place_order" onClick={getyourorderplaced}>Place Order </div>
                </div>
            </div>
            
        </div>
    )
}
export default Cart
