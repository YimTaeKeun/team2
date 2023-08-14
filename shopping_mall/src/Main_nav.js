import search_img from './Sale/img/search.png';
import Main_nav_popup from './Main_nav_popup';
import { useNavigate } from 'react-router-dom';
import Category from './Category';
import { useState } from 'react';
const Main_nav = () => {
    const down_popup = {"세일": ["폭탄 세일", "한정 세일"], "성별": ["남", "여"], "사계절": ["봄", "여름", "가을", "겨울"], "랭킹": ["금주", "한달", "전체"]};
    const popup_kind = ["세일", "성별", "사계절", "랭킹"];
    const [state, setState] = useState();
    const onChangeInput = () => {
        setState("https://www.musinsa.com/search/musinsa/integration?q=" + document.getElementsByClassName('main_search_input').value);
    }
    return <div className="sale_nav">
        <h1 className='main_logo_name'><strong><a href="./App.js">TYH Shopping Mall</a></strong></h1>
        <div>
            <input type="text" placeholder="검색" className='main_search_input' onChange={onChangeInput}/>
            <a href={state}><img src={search_img}/></a>
        </div>
        {/* 이 곳에 세일, 성별, 사계절, 랭킹을 택하는 팝업화면 코드를 넣을 예정 */}
        {/* <div className='nav_downpopup'>
            <a href=''><input className='Gender' type='button' value={'Woman'}/></a>
        </div> */}
        <div className='nav_popup'>
            {/* <div></div> */}
            <Category />
        {/* {popup_kind.map((each) => (<Main_nav_popup list={each} down_popup={down_popup}/>))} */}
        </div>
        
    </div>
}
export default Main_nav;