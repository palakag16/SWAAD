import React,{useEffect} from 'react';
import { useHistory } from 'react-router';

const Navbar = () => {
    const history = useHistory();
    const pushto = (el)=>{
       return history.push(`/${el}`);
    }
     
    
   useEffect(() => {
      if(document){
          var btns = document.getElementById('main');
          var btn = btns.getElementsByClassName('navitem')
          for (var i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("activenav");

                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" activenav", "");
                  }
                  this.className += " activenav";
            });
          }
      }
   }, [])

  

    return (
        <div className="navbar_section" id="main">
            <div className="navbar_sidemenu navbar_sidemenu" > 
            <div onClick={()=>pushto("")} className="navitem">home</div>  
            <div onClick={()=>pushto("gallery")}  className="navitem">gallery</div> 
             <div onClick={()=>pushto("reservation")}  className="navitem">Reservation</div>
            </div>
            <div className="title_div"><div className="navbarcompany_title"> swaad</div></div>
            <div className="navbar_sidemenu">
           <div onClick={()=>pushto("menu")} className="navitem" >menu</div>
            <div onClick={()=>pushto("order")} className="navitem" >order now</div> 
            <div onClick={()=>pushto("splitbill")} className="navitem" >split bill</div></div>
        </div>
    )
}

export default Navbar
