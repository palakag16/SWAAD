import React,{useContext ,useState} from 'react';
import { cred } from './Gallery';

const Test2 = () => {

    const {setstate,setval,val} = useContext(cred);
    const gettest = ()=>{
        setval("test1")
        setstate(true);
    }
    return (
        <div>
            <h1>Test2  profile</h1>
            <h1>username: {val} </h1>
            <button onClick={gettest} > setcart</button>
        </div>
    )
}

export default Test2
