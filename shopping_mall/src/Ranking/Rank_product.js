const Product_item = ({list}) => {
    return <div className='Product_item'>
        <img src={list.CCLLOOTTHH}/>
        <h2> { list.Sale} 번 째 인기! </h2>
    </div>
}
export default Product_item;