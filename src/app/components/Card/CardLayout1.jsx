import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const CardLayout1 = ({
  title,
  description,
  image,
  imageAlt,
}) => {
  /*const parallax1 = useParallax({
    scale: [1, 1.5, 'easeInQuad'],
    opacity: [1, 0],
  })

  const parallax2 = useParallax({
    scale: [1, 2, 'easeInQuad'],
    opacity: [0, 1],
    translateY: '-50%'
  })*/

  return (
    <div className="card1 lg:gap-10 group">
      <div className="card1__bg group-hover:shadow-1"></div>

      <div className="card1__img relative w-[80px] h-[80px] mx-auto">
        <img className="absolute z-0 inset-0 transition origin-bottom group-hover:scale-150 group-hover:opacity-0" src={image} width="88" height="88" alt="" loading="lazy" />
        <img className="absolute z-10 inset-0 transition origin-bottom invisible scale-1 opacity-0 group-hover:visible group-hover:opacity-100 group-hover:scale-[2]" src={imageAlt} width="160" height="160" alt="" loading="lazy" />
      </div>

      <h3 className="card1__title">{title}</h3>
      <p className="card1__description">{description}</p>
    </div>
  )
}

export default CardLayout1
