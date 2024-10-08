import PropTypes from 'prop-types'
import './Films.css'

function Container({
  image = '',
  header = '',
  headerDisplay = 'block',
  para = '',
  height = '',
  width = '',
  price = '',
}) {
  return (
    <div className="filmsBoxs">
      <div className="imageContainer">
        <div
          className="image"
          style={{
            background: `url('${image}') no-repeat center/cover`,
            height: height,
            width: width,
          }}
        ></div>
      </div>
      <div className="imageInfoContainer">
        <h2 style={{ display: headerDisplay }}>{header}</h2>
        <p href="#">{para}</p>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

Container.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  headerDisplay: PropTypes.string,
  para: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  price: PropTypes.string,
}

export default Container
