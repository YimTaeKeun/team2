import { useNavigate } from "react-router-dom";
const Woman_item = ({list}) => {
    const movePage = useNavigate();
    const Cloth_inform = list.Cloth;
    const Cloth_name = list.Name;
    const Cloth_price = list.Price;
    const Cloth_sale = list.Sale;
    
    function goInform(){
        movePage('/Product_inform/Product_inform?Cloth=' + Cloth_inform + "&Name=" + Cloth_name + "&Price=" + Cloth_price + "&Sale=" + Cloth_sale);
    }
    return <div className='Name_item'>
        <img src={list.Cloth} onClick={goInform}/>
        <h2>{list.Name}</h2>
    </div>
}
export default Woman_item;