import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import img from '../images/food2.jpg'
import Details from './Details';



const Menutile = () => {
    const [details1, updateDet] = useState(Details.slice(0, 3));
    const [details2, updatedet] = useState(Details.slice(3, 5));
    useEffect(() => {
        const images =  document.querySelectorAll('.food_img');
        const customize = document.querySelectorAll('.customize');
        customize.forEach((el)=>{
            if(el.innerHTML=="null"){
                el.parentElement.style.display="none";
            }
            else{
                const els= el.parentElement.parentElement.previousElementSibling.children.foodimage;
                if(els.alt=="null"){
                el.parentElement.classList.remove('customstyle_add')
                }
            }
        })
        images.forEach((el)=>{
            if(el.alt=="null"){
                el.style.display="none";
            }
           
        })
    }, [])


    return (
        <>
            <div className="recommandations">our recommandations</div>
            <div className="menu_sec">
                <div className="sec1">
                    {details1.map((el) => {
                        return (
                            <div className="food_sec">
                                <div className="food_imagesec" >
                                    <img src={el.image} className="food_img" alt={el.alt} id="foodimage" ></img>
                                </div>
                                <div className="food_details">
                                    <div className="food_title"> {el.title}</div>
                                    <div className="food_pricesection">
                                        <div className="veglogo"> <div className="veglogocircle"></div></div>
                                        <div className="greydot"></div>
                                        <div className="food_price">&#8377;{el.price}</div>
                                    </div>
                                    <div className="customize_sec customstyle_add" id="customize" >
                                        <i class="fas fa-utensils"></i> <div className="customize" >{el.customize}</div>
                                    </div>
                                </div>
                                <div className="addbtn"> +Add</div>
                            </div>
                        )
                    })}
                    </div>

                    <div className="sec2">
                    {details2.map((el) => {
                        return (
                            <div className="food_sec">
                                <div className="food_imagesec">
                                    <img src={el.image} className="food_img" id="foodimage" alt={el.alt}></img>
                                </div>
                                <div className="food_details">
                                    <div className="food_title"> {el.title}</div>
                                    <div className="food_pricesection">
                                        <div className="veglogo"> <div className="veglogocircle"></div></div>
                                        <div className="greydot"></div>
                                        <div className="food_price">&#8377;{el.price}</div>
                                    </div>
                                    <div className="customize_sec customstyle_add" id="customize">
                                        <i class="fas fa-utensils"></i> <div className="customize">{el.customize}</div>
                                    </div>
                                </div>
                                <div className="addbtn"> +Add</div>
                            </div>
                        )
                    })}
                        
                    </div>
            </div>
        </>
    )
}

export default Menutile
