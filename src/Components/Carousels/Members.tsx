import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css'

const members: number[] = []

for (var i = 0; i < 10; i++) members[i] = i + 1

function Members() {
  return (
    <Flickity
      options={{
        autoPlay: 1500,
        lazyLoad: true,
        wrapAround: true,
        prevNextButtons: false,
        initialIndex: Math.floor(members.length / 2),
      }}
    >
      {members.map((i) => (
        <div
          key={'flickity' + i}
          style={{ width: 100, height: 100 }}
          className="mx-5 flex justify-center items-center rounded-full bg-white text-black"
        >
          {i}
        </div>
      ))}
    </Flickity>
  )
}

export default Members
