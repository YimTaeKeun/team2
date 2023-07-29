import search_img from './img/search.png';
import {useNavigate} from 'react-router-dom';
const Sale_nav = () => {
    // const navigate = useNavigate();
    // const searchProduct = () => {
    //     navigate("https://naver.com");
    //     document.querySelector('.search_input').value = "";
    // }
    return <div className="sale_nav">
        <div></div>
        <h1><strong><a href='../App.js'>태연희</a><a href='./Sale_nav'> 세일</a></strong></h1>
        <div>
            <input type="text" placeholder="검색" class="search_input"/>
            <img src={search_img}/>
        </div>
    </div>
}
export default Sale_nav;