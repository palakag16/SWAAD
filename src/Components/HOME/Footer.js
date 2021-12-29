import React from 'react';
import { useHistory } from 'react-router';
const Footer = () => {
    const history = useHistory();
    const pushto = (el)=>{
       return history.push(`/${el}`);
    }
   
    return (
        <div className="footer_section">
           <div className="about_company">
               <div className="company_title">SWAAD</div>
               <div className="about_details">
               We welcome you to a delicious feast of exquisite dishes in Star line. With a wide range of world cuisines to
                choose from, we guarantee you a sumptuous feast experience in our restaurant.
               </div>
           </div>

           <div className="contact_details">
           <div className="contact"><i class="fa fa-mobile" aria-hidden="true"></i>56875265989</div>
           <div className="email_details"><i class="fa fa-envelope-o" aria-hidden="true"></i>test12@gmail.com</div>

           </div>
           <div className="links_and_media">
               <div className="footer_link">
               <div className="links_title"> links</div>
               <div className="important_linksec">
                   <div onClick={()=>pushto('')}>Home</div>
                    <div onClick={()=>pushto('splitbill')}>split bill</div>
                    <div onClick={()=>pushto('gallery')}>gallery</div>
                    <div onClick={()=>pushto('order')}>order now</div>
                    <div onClick={()=>pushto('reservation')}>reservation</div>
                   <div onClick={()=>pushto('menu')}>menu</div> 
               </div>
               </div>
               <div className="footer_link">
               <div className="links_title">search us</div>
               <div className="important_linksec">
                   <div><i class="fa fa-facebook-square" aria-hidden="true"></i></div> 
                   <div><i class="fa fa-instagram" aria-hidden="true"></i></div>
                   <div><i class="fa fa-twitter-square" aria-hidden="true"></i></div>
                   <div><i class="fa fa-google" aria-hidden="true"></i></div>
                   <div><i class="fa fa-pinterest-square" aria-hidden="true"></i></div>
               </div>
               </div>
           </div>
        </div>
    )
}

export default Footer
