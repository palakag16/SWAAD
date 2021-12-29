import React from "react";
import { getDefaultLocale } from "react-datepicker";

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

const Books = ({ books }) => {
   
    return (
        <div>
            {books.books.map((el) => {
                return <div>{el.title}</div>
            })}
        </div>
    )
}

const withHoc = (Component,Datage) => {
    return (props) => (
        <div>
            <div>hey</div>
            <Component books={Datage(props.name)}></Component>
        </div>
    )
}

const ModifiedBooks = withHoc(Books,(name)=>{return{[name]:DB[name]}})


export { Books,ModifiedBooks};
