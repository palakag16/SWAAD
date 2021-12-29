import React,{createContext,useState} from 'react'

import Test1 from './Test1';
import Test2 from './Test2';
const cred = createContext();
const Gallery = () => {
    const [state,setstate] = useState(false);
    const [val , setval] = useState("")
   
    return (
        <div>
            <cred.Provider value={{setstate,setval,val}}>
               { state? <Test1/>: <Test2/>}
            </cred.Provider>
        </div>
    )
}

export default Gallery;

export {cred};
