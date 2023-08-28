import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style/style.css";
const Category = () => {
  const menuLst = ["세일", "성별", "랭킹"];
  const detail = [["폭탄 세일", "한정 세일"], ["남", "여"], ["금주", "한달", "전체"]];
  const detail_url = [['/Sale', '/Sale'], ['/Man', '/Woman'], ['/Spring', '/Summer', '/Autumn', '/Winter'], ['/Ranking', '/Ranking', '/Ranking', 'Ranking']];
  const movePage = useNavigate();
  function goPage(big_idx, detail_idx){
    movePage(detail_url[big_idx][detail_idx]);
  }
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
            {detail[idx].map((cont, index) => (
              <li onClick={() => (goPage(idx, index))}>{cont}</li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Category;