import React, { useState } from "react";
import style from "./style/style.css";
const Category = () => {
  const menuLst = ["세일", "성별", "사계절", "랭킹"];
  const [hide, setHide] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
  });
  const mouseEvent = (menuName, bool) => {
    const change = { ...hide };
    change[menuName] = bool;
    setHide(change);
  };
  return (
    <nav className="nav">
      <ul className="navContainer">
        {menuLst.map((v, idx) => (
          <li
            className={hide[v] ? "active" : "none"}
            onMouseEnter={() => mouseEvent(v, true)}
            onMouseLeave={() => mouseEvent(v, false)}
          >
            <p>{v}</p>
          </li>
        ))}
      </ul>
      <div className="detailMenu">
        {menuLst.map((v, idx) => (
          <ul
            onMouseEnter={() => mouseEvent(v, true)}
            onMouseLeave={() => mouseEvent(v, false)}
          >
            <li>{`메뉴${idx + 1}-${1}`}</li>
            <li>{`메뉴${idx + 1}-${2}`}</li>
            <li>{`메뉴${idx + 1}-${3}`}</li>
            <li>{`메뉴${idx + 1}-${4}`}</li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Category;