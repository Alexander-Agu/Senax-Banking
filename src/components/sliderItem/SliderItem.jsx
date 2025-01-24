import React from 'react'
import "./sliderItem.css"

function SliderItem({img, des}) {
  return (
    <div className="sliderItemContainer">
        <div className="sliderImg" 
            style={{
                backgroundImage: `url('/src/components/about/about${img}.png')`,
            }}

        >

        </div>

        <div className="sliderDes">
            {des}
        </div>
    </div>
  )
}

export default SliderItem