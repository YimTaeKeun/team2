import search_img from './Sale/img/search.png';
const Main_nav = () => {
    return <div className="sale_nav">
        <div></div>
        <h1 className='logo_name'><strong><a href="./App.js">태연희 쇼핑몰</a></strong></h1>
        <div>
            <input type="text" placeholder="검색"/>
            <img src={search_img}/>
        </div>
    </div>
}
export default Main_nav;