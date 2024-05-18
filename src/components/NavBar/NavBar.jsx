import { NavLink } from 'react-router-dom'
import '../../style/nav.css'

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <NavLink to="/">
              <div className="logo-wrapper" alt="logo">
                <img className="logo" src="/logo.png" alt="Logo" />
              </div>
            </NavLink>
          </div>

          <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
