import React,{useContext,useState} from 'react';
import { cred } from './Gallery';

const Test1 = () => {
    const {setstate,val , setval} = useContext(cred)
    const gettest1 = ()=>{
        setstate(false);
        setval("test2")
    }
    return (
        <div>
            <h1>Test1   </h1>
            <h1> username : {val}</h1>
            <button onClick={gettest1} > setcart</button>
        </div>
    )
}

export default Test1
