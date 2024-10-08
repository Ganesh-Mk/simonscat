import PropTypes from 'prop-types'
import { useState } from 'react'
import './KnowCat.css'

function KnowCatContainer({ header = '', para, clsname = '', image1, image2 }) {
  const [image, setImage] = useState(image1)
  const [paraOpacity, setParaOpacity] = useState('0')
  return (
    <div className="knowCatComponent">
      <div
        className={`knowCatImage ${clsname}`}
        style={{ background: `url(${image}) no-repeat center/cover` }}
        onMouseEnter={() => {
          setImage(image2)
          setParaOpacity('100')
        }}
        onMouseLeave={() => {
          setImage(image1)
          setParaOpacity('0')
        }}
      ></div>
      <h1>{header}</h1>
      <p style={{ opacity: paraOpacity }}>{para}</p>
    </div>
  )
}

KnowCatContainer.propTypes = {
  header: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  clsname: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
}

export default KnowCatContainer
