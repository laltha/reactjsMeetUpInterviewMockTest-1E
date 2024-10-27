import {Link} from 'react-router-dom'
import {Nav, Logo} from './style'

const Header = () => (
  <Nav>
    <Link to="/">
      <Logo
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
      />
    </Link>
  </Nav>
)

export default Header
