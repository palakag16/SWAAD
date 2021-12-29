import React, { useEffect ,useState} from 'react';
import img1 from '../../images/n2.jpg';

const Homegallery = () => {
 const[images,updateImages] = useState([]);
    useEffect(async () => {
        let apikey = " 563492ad6f9170000100000186345671b56d4cb5a35f72d49da72409";
        let query = "food";
        let page_num = 1;
        const data = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}&per_page=20`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: apikey,
                },
            });
        const response = await data.json();  
        updateImages(response.photos)
        console.log(response.photos)
    }, [])
    return (
        <div className="home_gallery">
           { images.map((el)=>{
             return  <div>
                <img src={el.src.original} alt="alt"></img>
            </div>
           })}
           
        </div>
    )
}

export default Homegallery;

