import search_img from './rankimage/search.png';
const Rank_nav = () => {
    return <div className="sale_nav">
        <div></div>
        <h1><strong><a href='../App.js'>TYH</a><a href='./Rank_nav'> 랭킹</a></strong></h1>
        <div>
            <input type="text" placeholder="검색"/>
            <img src={search_img}/>
        </div>
    </div>
}
export default Rank_nav;