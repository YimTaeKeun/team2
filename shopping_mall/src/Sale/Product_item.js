import { useNavigate } from "react-router-dom";
const Product_item = ({list}) => {
    const movePage = useNavigate();
    const Cloth_inform = list.Cloth;
    const sale = list.Sale
    function goInform(){
        movePage('/Product_inform/Product_inform?Cloth=' + Cloth_inform + "&Sale=" + sale);
    }
    return <div className='Product_item'>
        <img src={list.Cloth} onClick={goInform}/>
        <h2>{list.Sale}% 세일</h2>
    </div>
}
export default Product_item;