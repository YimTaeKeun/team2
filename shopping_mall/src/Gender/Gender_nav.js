import search_img from '../img/search.png';
const Gender_nav = () => {
    return <div className="Sale_nav">
        <div></div>
        <h1><strong><a href='../App.js'>태연희</a><a href='./Gender_nav'> 성별</a></strong></h1>
        <div>
            <input type="text" placeholder="검색"/>
            <img src={search_img}/>
        </div>
    </div>
}
export default Gender_nav;