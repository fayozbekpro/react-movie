import { Link } from 'react-router-dom';
import "./Header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">P<span className="root-secondary">r</span>og<span className="root-secondary">r</span>ess</Link>
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/populars">Most Popular</Link>
        <Link to="/search">search</Link>
      </div>
    </div>
  )
}

export default Header;