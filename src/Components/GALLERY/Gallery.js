import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';

import { useInView } from 'react-intersection-observer';


const Gallery = () => {
    const [state, updatestate] = useState(false);
    const [images, updateimages] = useState([]);
    const [modalimage, updatemodalimage] = useState();
    const [loader,updateLoader] = useState(false);
    const [page_num, setPage] = useState(2);

    const openModal = (e) => {
        updatestate(true)
        updatemodalimage(e.target.src);
    }
    const closeModal = () => {
        updatestate(false)
    }

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    })
    console.log(ref, "ref");
    useEffect(async () => {
        let apikey = " 563492ad6f9170000100000186345671b56d4cb5a35f72d49da72409";
        let query = "food";
        const data = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page_num}&per_page=30`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: apikey,
                },
            });
        const response = await data.json();
        updateimages(images.concat(response.photos));
        updateLoader(true);
    }, [page_num])
     
    useEffect(() => {
        if (inView) {
            setPage(page_num+1)
        }
      }, [inView])

    console.log(images);
    const n = images.length / 5;
    
    return (
        <div className="home">
            <div className="gallery_title">Explore our Gallery</div>
            
            {loader?<div className="main_gallery">
               <div className="image_sections">
                      {images.slice(0,n).map((el) => {
                    return <div className="gridelem" onClick={openModal}>
                        <img src={el.src.original} className="img_style"></img>
                    </div>
                })}
                </div>
                
                <div className="image_sections">
                      {images.slice(n,2*n).map((el) => {
                    return <div className="gridelem" onClick={openModal}>
                        <img src={el.src.original} className="img_style"></img>
                    </div>
                })}
                </div>

                <div className="image_sections">
                      {images.slice(2*n,3*n).map((el) => {
                    return <div className="gridelem" onClick={openModal}>
                        <img src={el.src.original} className="img_style"></img>
                    </div>
                })}
                </div>

                <div className="image_sections">
                      {images.slice(3*n,4*n).map((el) => {
                    return <div className="gridelem" onClick={openModal}>
                        <img src={el.src.original} className="img_style"></img>
                    </div>
                })}
                </div>

                <div className="image_sections">
                      {images.slice(4*n,5*n).map((el) => {
                    return <div className="gridelem" onClick={openModal}>
                        <img src={el.src.original} className="img_style"></img>
                    </div>
                    
                })}
                </div>

                
               
                


            </div>:<div className="loading_status">loading...</div>}
            <Modal
                visible={state}
                width="700"
                height="500"
                effect="fadeInUp"
                onClickAway={closeModal} >
                <div className="modal_box">
                    <img src={modalimage} className="img_style1" ></img>
                </div>


            </Modal>
            <div className="load-more-data" ref={ref}></div>
         
        </div>
    )
}

export default Gallery

