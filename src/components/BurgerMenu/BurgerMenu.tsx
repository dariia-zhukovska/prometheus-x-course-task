import React, { useState } from "react";
import burgerIcon from "../../assets/svg/icon_burger.svg";

interface IMenuProps {
  items: Array<{ label: string; link: string }>;
}

const BurgerMenu = ({ items }: IMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav>
      <div className="burger-menu">
        <img src={burgerIcon} onClick={toggleMenu} />
      </div>
      <ul className={`menu ${showMenu ? "show-menu" : ""}`}>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.link} onClick={toggleMenu}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BurgerMenu;
