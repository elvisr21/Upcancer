import './TopNavbar.css';
import {useState,useRef} from 'react';
import { ReactComponent as CogIcon } from '../../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../../icons/bolt.svg';
import {CSSTransition} from 'react-transition-group';

export const Navbar=(props)=>{
    return (
        <nav className="navbar">
          <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}
export const NavItem=(props)=>{
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
        <a href={props.to} className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
        </a>

        {open && props.children}
        </li>
    );
    
}
export const Dropdownmenu=()=>{
    const[activeMenu,setActiveMenu]=useState('main');
    const[menuHeight,setMenuHeight]=useState(null);
    const dropdownRef = useRef(null);
    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    function DropdownItem(props){
        return (
            <a href={props.to} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
              <span className="icon-button">{props.leftIcon}</span>
              {props.children}
              <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }
    return (
        <div className="dropdown" style={{height: menuHeight} }ref={dropdownRef} >
          <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                    <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Pages
                    </DropdownItem>
            
                    </div>
          </CSSTransition>
          <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                    <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Things</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>things1</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>things2</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>things3</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>things4</DropdownItem>
                    </div>
          </CSSTransition>
          <CSSTransition
            in={activeMenu === 'animals'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Pages</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘" to="/">dashboard</DropdownItem>
                    <DropdownItem leftIcon="🐸"to="calendar">calendar</DropdownItem>
                    <DropdownItem leftIcon="🦋"to="reports">reports</DropdownItem>
                    <DropdownItem leftIcon="🦋"to="chat">chat</DropdownItem>
                    <DropdownItem leftIcon="🦋"to="signout">signout</DropdownItem>

                </div>
          </CSSTransition>
        </div>
      );
}