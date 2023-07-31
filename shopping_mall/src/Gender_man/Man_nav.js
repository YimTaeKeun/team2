import search_img from './man_img/search.png';
const Man_nav = () => {
    return <div className="sale_nav">
        <div></div>
        <h1 className='logo_name'><strong><a href='../App.js'>태연희</a><a href='./Man_nav'> 남자</a></strong></h1>
        <div>
            <input type="text" placeholder="검색"/>
            <img src={search_img}/>
        </div>
    </div>
}
export default Man_nav;