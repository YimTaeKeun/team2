import search_img from './woman_img/search.png';
const Woman_nav = () => {
    return <div className="sale_nav">
        <div></div>
        <h1 className='logo_name'><strong><a href='../App.js'>TYH</a><a href='./Woman_nav'> Woman</a></strong></h1>
        <div>
            <input type="text" placeholder="검색"/>
            <img src={search_img}/>
        </div>
    </div>
}
export default Woman_nav;