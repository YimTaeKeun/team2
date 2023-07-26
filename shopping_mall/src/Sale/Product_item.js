const Product_item = ({list}) => {
    return <div className='Product_item'>
        <img src={list.Cloth}/>
        <h2>{list.Sale}% 세일</h2>
    </div>
}
export default Product_item;