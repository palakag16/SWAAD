// import React,{useState,useEffect,Suspense,lazy, Component} from 'react';
// import { Switch, Route } from 'react-router-dom';
// import "../node_modules/@syncfusion/ej2-base/styles/material.css";
// import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
// import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
// import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
// import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
// const Menu = lazy(()=>import('./Components/MENU/Menu'));
// const Reservation = lazy(()=>import('./Components/RESERVATION/Reservation'));
// const Splitbill = lazy(()=>import('./Components/Split_bill/Splitbill'));
// const Home = lazy(()=>import('./Components/HOME/Home'));
// const OrderNow = lazy(()=>import('./Components/Order_Online/OrderNow'));
// const Navbar = lazy(()=>import('./Components/HOME/Navbar'));
// const Gallery = lazy(()=>import('./Components/GALLERY/Gallery'));
// const  Orderplaced = lazy(()=>import('./Components/Order_Online/Orderplaced'));
// const Info = lazy(()=>import('./Components/Info'));


// const App = () => {
//   const[view,updateview]= useState(false);
//   window.addEventListener('resize',()=>{
//     if(window.innerWidth<1100){
//       updateview(true)
//     }
//     else{
//       updateview(false)}
// });
  
//    useEffect(() => {
//     const screensize = window.innerWidth;
//     if(screensize<1100){
//       updateview(true)
//     }
//     else{
//       updateview(false);
//     }
//      }, [])
   

//   return (
//     <>
//       <Suspense fallback={<div className="lazyloadinfo">loading...</div>}>
//       {view?<Info/>:<>
//       <Navbar/>
//       <Switch>
//         <Route exact path='/'><Home /></Route>
//         <Route exact path='/menu'><Menu /></Route>
//         <Route exact path='/reservation'><Reservation/></Route>
//         <Route exact path='/splitbill'><Splitbill/></Route>
//         <Route exact path='/order'><OrderNow/></Route>
//         <Route exact path='/gallery'><Gallery/></Route>
//         <Route exact path='/orderplaced'><Orderplaced/></Route>
//       </Switch>
//       </>
//       }
//       </Suspense>
//     </>
//   )
// }

// export default App

 import React from 'react';
 import {Books,ModifiedBooks} from './Test/Books';

 const DB = {
   books:[
     {title:"abc"},
     {title:"bcd"}
   ],
   songs:[
    {title:"song1"},
    {title:"song2"}
  ]
 } 
 


 const getData = (name)=>{
  
     return {
       [name]:[name]
     }
 }

 console.log(getData("songs"));

const App = () => {
  return (
    <div>
      hello react hocs
      {/* <Books books={DB.books}></Books> */}
      <ModifiedBooks name="books" ></ModifiedBooks>

    </div>
  )
}

export default App
