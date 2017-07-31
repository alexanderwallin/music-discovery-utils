import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

/**
 * Header
 */
class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div>Music Discovery Utils</div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/link-lists">Link Lists</Link>
        </nav>
      </header>
    )
  }
}

export default Header
