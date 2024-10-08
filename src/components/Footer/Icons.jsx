import PropTypes from 'prop-types'
import './Footer.css'

function Icons({ image = '' }) {
  return (
    <div className="iconImageContainer">
      <div
        className="iconImage"
        style={{ background: `url(${image}) no-repeat center/cover` }}
      ></div>
    </div>
  )
}

Icons.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Icons
