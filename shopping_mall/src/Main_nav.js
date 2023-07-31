import search_img from './Sale/img/search.png';
import { useNavigate } from 'react-router-dom';
const Main_nav = () => {
    const movePage = useNavigate();
    function goSale(){
        movePage('/Sale/Sale');
    }
    return <div className="sale_nav">
        <h1 className='main_logo_name'><strong><a href="./App.js">TYH Shopping Mall</a></strong></h1>
        <div>
            <input type="text" placeholder="검색" className='main_search_input'/>
            <img src={search_img} onClick={goSale}/>
        </div>
        <div>
            {/* 이 곳에 세일, 성별, 사계절, 랭킹을 택하는 팝업화면 코드를 넣을 예정 */}
        </div>
    </div>
}
export default Main_nav;