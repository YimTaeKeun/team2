import search_img from './img/search.png';
const Sale_nav = () => {
    return <div className="sale_nav">
        <div></div>
        <h1><strong><a href='../App.js'>태연희</a><a href='./Sale_nav'> 세일</a></strong></h1>
        <div>
            <input type="text" placeholder="검색"/>
            <img src={search_img}/>
        </div>
    </div>
}
export default Sale_nav;