import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import white_arrow from '../../assets/white-arrow.png'

const Gallery = () => {
    return (
        <div className='campus'>

            <div className='gallery'>
                <img className='gallery-1' src={gallery_1} alt="" />
                <img className='gallery-1' src={gallery_2} alt="" />
                <img className='gallery-1' src={gallery_3} alt="" />
                <img className='gallery-1' src={gallery_1} alt="" />


            </div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
        </div>
    )
}

export default Gallery
