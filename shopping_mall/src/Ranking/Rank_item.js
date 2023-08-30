import { useNavigate } from "react-router-dom";
const Rank_item = ({list}) => {
    const movePage = useNavigate();
    const Cloth_inform = list.CCLLOOTTHH;
    const sale_cloth = list.Sale;
    const Cloth_name = list.Name;
    const price_cloth = list.Price;
    function goInform(){
        movePage('/Product_inform/Product_inform?CCLLOOTTHH=' + Cloth_inform + "&Sale=" + sale_cloth + "&Name=" + Cloth_name + "&Price=" + price_cloth);
    }
    return <div className='Rank_item'>
        <img src={list.CCLLOOTTHH} onClick={goInform}/>
        <h2>{list.Sale}</h2>
    </div>
}
export default Rank_item;