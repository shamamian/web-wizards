import { NavLink } from "react-router-dom";
import '../sidebar/Sidebar.css'
import Shape from '../../../assets/svg/Shape.svg'
import Vector1 from '../../../assets/svg/Vector.svg'
import Vector2 from '../../../assets/svg/Vector(1).svg'
export function Sidebar() {
    return (
      <div className="sidebar">
        <div className='sidebar__logo'>
          <img src='../../../assets/png/sidebar-logo.png' />
        </div>
        <div className='sidebar__menu'>
          <NavLink to="/" className='sidebar__menu-link'>
            <img src={Shape} alt="" />
            <p className='sidebar__menu-link-text'>Traffic</p>
          </NavLink>
          <NavLink to="/overview" className='sidebar__menu-link'>
            <img src={Vector1} alt="" />
            <p className='sidebar__menu-link-text'>Overview</p>
          </NavLink>
          <NavLink to="/csv" className='sidebar__menu-link'>
            <img src={Vector2} alt="" />
            <p className='sidebar__menu-link-text'>CSV</p>
          </NavLink>
        </div>
      </div>
    );
}

  export default Sidebar;
  