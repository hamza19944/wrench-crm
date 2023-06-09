import { useState } from "react";
import "./sidebar.css"
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
    const [active, setActive] = useState<boolean>(false)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setActive(!active);
    }

    return (
        <div className="side-bar">
            <div className="side-head">
                <h1>Меню</h1>
            </div>
            <ul className="side-bar-big">
                <NavLink to="/">
                    <span><img src="./images/search.png" alt="" /></span>
                    <h3>Главная</h3>
                </NavLink>
                <NavLink to="/address">
                    <span><img src="./images/home.png" alt="" /></span>
                    <h3>Пойск адресов</h3>
                </NavLink>
                <NavLink to="/table">
                    <span><img src="./images/apps.png" alt="" /></span>
                    <h3>Таблицы</h3>
                </NavLink>
                <NavLink to="/chal">
                    <span><img src="./images/calendar.png" alt="" /></span>
                    <h3>Календарь</h3>
                </NavLink>
                <NavLink to="/photo">
                    <span><img src="./images/marker.png" alt="" /></span>
                    <h3>Карты</h3>
                </NavLink>
                <NavLink to="/widget">
                    <span><img src="./images/screen.png" alt="" /></span>
                    <h3>Виджеты</h3>
                </NavLink>
                <NavLink to="/options" id="options">
                    <div onClick={handleClick}>
                        <span><img src="./images/settings.png" alt="" /></span>
                        <h3>Настройки</h3>
                    </div>
                    <ul className={active ? "option" : "option active"}>
                        <NavLink to="/profile-setting">
                            <span><img src="./images/user.png" alt="" /></span>
                            <h3>Настройки профилия</h3>
                        </NavLink>
                        <NavLink to="/finance">
                            <span><img src="./images/tty.png" alt="" /></span>
                            <h3>управление финансами</h3>
                        </NavLink>
                    </ul>
                </NavLink>
                <NavLink to="/signout">
                    <span><img src="./images/exit.png" alt="" /></span>
                    <h3>Выход</h3>
                </NavLink>
            </ul>
            <ul className="side-bar-small">
                <NavLink to="/">
                    <span><img src="./images/search.png" alt="" /></span>
                </NavLink>
                <NavLink to="/addres" className="active">
                    <span><img src="./images/home.png" alt="" /></span>
                </NavLink>
                <NavLink to="/table">
                    <span><img src="./images/apps.png" alt="" /></span>
                </NavLink>
                <NavLink to="/chal">
                    <span><img src="./images/calendar.png" alt="" /></span>
                </NavLink>
                <NavLink to="/photo">
                    <span><img src="./images/marker.png" alt="" /></span>
                </NavLink>
                <NavLink to="/widgets">
                    <span><img src="./images/screen.png" alt="" /></span>
                </NavLink>
                <NavLink to="/options" id="options">
                    <span><img src="./images/settings.png" alt="" /></span>
                </NavLink>
                <NavLink to="/signout">
                    <span><img src="./images/exit.png" alt="" /></span>
                </NavLink>
            </ul>
        </div>
    );
}
 
export default Sidebar;