import search_img from './Sale/img/search.png';
import Category from './Category';
import { useState } from 'react';
const Main_nav = () => {
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
        <div className='nav_popup'>
            <Category />
        </div>
        
    </div>
}
export default Main_nav;