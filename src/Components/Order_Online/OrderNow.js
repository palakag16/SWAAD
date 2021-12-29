import React, { useState,createContext, useMemo } from 'react';
import Order from './Order';
import img1 from '../../images/foodimg.jpg';
import img2 from '../../images/mainb.jpg'
import Cart from './Cart';
import Ordermenu from './Ordermenu';
import { useEffect } from 'react';
const cart_toggle = createContext();

const OrderNow = () => {

    const [menuItems, updateMenuItems] = useState(Order);
    const [cartitems, updatecartitems] = useState([]);
    const [state,setstate] = useState(true);
    const uniqueList = [...new Set(Order.map((el) => {
        return el.cuisine_category
    }))]

    const cuisineType = Order.map((el) => {
        return el.cuisine_type
    })

    const tagList = [...new Set([].concat(...cuisineType))]
    const getCartvalues = ()=>{
        setstate(false);
    }

    const getFilteredItems = (elem,e) => {
        const filteredone = Order.filter((el) => {
            return elem == el.cuisine_category
        })

        var btnContainer = document.getElementById("cuisine_categlist");
        var btns = btnContainer.getElementsByClassName("cuisine_type_item");
        var btnc = document.querySelectorAll('.filter_tileone');
        console.log(btnc,"btnc")
        btnc.forEach((el)=>{
            if(el.className.includes('active')){
                el.classList.remove('active');
            }
            return el;
        })
        const target = e.target;
        target.classList.add('activec');
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("activec");

                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" activec", "");
                  }
                  this.className += " activec";
            });
          }
        updateMenuItems(filteredone);
    }

    const getFilterbytag = (tag,e) => {
        const filteredtag = Order.filter((el) => {
            return el.cuisine_type.includes(tag)
        })
        var btnContainer = document.getElementById("filter_sec");
        var btns = btnContainer.getElementsByClassName("filter_tileone");
        var btnc = document.querySelectorAll('.cuisine_type_item');
        
        btnc.forEach((el)=>{
            if(el.className.includes('activec')){
                el.classList.remove('activec');
            }
            return el;
        })
        const target = e.target;
        target.classList.add('active');
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");

                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                  }
                  this.className += " active";
            });
          }

        updateMenuItems(filteredtag);
    }

    const addToCart = (e,cartitem) => {
        const filtercartitem = Order.filter((c_items) => {
            return c_items.id == cartitem;
        })
      
        const items = filtercartitem.concat(cartitems);
        updatecartitems([...new Set(items)]);
        e.target.classList.add('activeaddbtn')
    }
    
    const cartvals = cartitems.map((el)=>{
        return el.id
    })
  
    useMemo( () => {
        menuItems.map((el)=>{

            if(cartvals.includes(el.id)){
                return el.add="ADDED"
            }
            else{
                return el.add="+Add"
            }
            return el; 
        })
        }
        ,[cartvals,cartitems])


    const delBtn = (id)=>{
        const delfilter = cartitems.filter((el)=>{
            return el.id !==id;
        })
        updatecartitems(delfilter);
    }
    
    const addItem = (id)=>{
        let updatecart = cartitems.map((el)=>{
           if(el.id==id){
               return {...el, quantity:el.quantity+1}
           }
           return el;
        })

       updatecartitems(updatecart);
    }
   
    const removeItem = (id)=>{
        let updatecart = cartitems.map((el)=>{
           if(el.id==id){
               return {...el, quantity:el.quantity-1}
           }
           return el;
        })
       updatecartitems(updatecart);
    }

    return (

        <div>
            <cart_toggle.Provider value={{setstate,uniqueList,cartitems, addItem, delBtn, removeItem,tagList,getFilterbytag,getFilteredItems,menuItems,addToCart}}>
            <Ordermenu/>
            </cart_toggle.Provider>

        </div>
    )
}

export default OrderNow;
export {cart_toggle};
