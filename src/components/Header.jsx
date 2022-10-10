import PropTypes from 'prop-types'

function Header({ textPropFromComponent, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{textPropFromComponent}</h2>
      </div>
    </header>
  )
}

Header.propTypes = {
  textPropFromComponent: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

Header.defaultProps = {
  textPropFromComponent: "Feedback UI",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

export default Header