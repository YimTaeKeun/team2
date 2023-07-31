import search_img from '../Sale/img/search.png';
const nav = () => {
    return <div className="sale_nav">
        <div></div>
        <h1 className='logo_name'><strong><a href='./Product_inform.js'> 상품 정보</a></strong></h1>
        <div>
            <input type="text" placeholder="검색"/>
            <img src={search_img}/>
        </div>
    </div>
}
export default nav;