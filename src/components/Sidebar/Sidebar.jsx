import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { CgProfile } from 'react-icons/cg'
import { RiMessage3Line, RiNewspaperLine, RiMusic2Line, RiSettings4Line } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { IoLogOutOutline } from 'react-icons/io5'

const Sidebar = (props) => {
    return (
        <aside className={s.side__bar}>
            <div>
                <NavLink className={s.side__barLogo} to='/profile'>
                    <img src={logo} alt="" />
                    <span>Social-Network</span>
                </NavLink>
            </div>
            <ul>
                <li>
                    <NavLink to="/profile" className={s.item}>
                        <CgProfile className={s.side__barIcon} />
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages" className={s.item}>
                        <RiMessage3Line className={s.side__barIcon} />
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={s.item}>
                        <FiUsers className={s.side__barIcon} />
                        <span>Users</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" className={s.item}>
                        <RiNewspaperLine className={s.side__barIcon} />
                        <span>News</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/music" className={s.item}>
                        <RiMusic2Line className={s.side__barIcon} />
                        <span>Music</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={s.item}>
                        <RiSettings4Line className={s.side__barIcon} />
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
            <div onClick={props.logout} className={s.side__barLogOut}>
                {props.isAuth
                    ?
                    <NavLink to='#' className={s.item}>
                        <IoLogOutOutline className={s.side__barIcon} />
                        <span>Log out</span>
                    </NavLink>
                    : <NavLink className={s.item} to={'/login'}>
                        <IoLogOutOutline className={s.side__barIcon} />
                        <span>Log in</span>
                    </NavLink>}
            </div>
        </aside>
    );
}

export default Sidebar;