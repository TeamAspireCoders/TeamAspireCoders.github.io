import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css'

import './Carousel.css'

function Carousel() {
  return (
    <Flickity
      className="projects"
      options={{
        autoPlay: true,
        lazyLoad: true,
        pauseAutoPlayOnHover: true,
        wrapAround: true,
      }}
    >
      <div className="mx-5 w-[800px] h-[500px] bg-white text-black">1</div>
      <div className="mx-5 w-[800px] h-[500px] bg-white text-black">2</div>
      <div className="mx-5 w-[800px] h-[500px] bg-white text-black">3</div>
      <div className="mx-5 w-[800px] h-[500px] bg-white text-black">4</div>
      <div className="mx-5 w-[800px] h-[500px] bg-white text-black">5</div>
    </Flickity>
  )
}

export default Carousel

// import React from 'react'
// import Flicking from '@egjs/react-flicking'
// import '@egjs/react-flicking/dist/flicking.css'

// const Carousels: React.FC<{}> = () => {
//   return (
//     <Flicking
//       viewportTag="div"
//       cameraTag="div"
//       renderOnSameKey={false}
//       align="center"
//       horizontal={true}
//       circular={true}
//     >
//       <div className="panel">1</div>
//       <div className="panel">2</div>
//       <div className="panel">3</div>
//     </Flicking>
//   )
// }

// export default Carousels
