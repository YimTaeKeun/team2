import { useNavigate } from "react-router-dom";
const Rank_item = ({list}) => {
    const movePage = useNavigate();
    const Cloth_inform = list.Cloth;
    const sale = list.Sale;
    const Cloth_name = list.Name;
    const price = list.Price;
    function goInform(){
        movePage('/Product_inform/Product_inform?Cloth=' + Cloth_inform + "&Sale=" + sale + "&Name=" + Cloth_name + "&Price=" + price);
    }
    return <div className='Rank_item'>
        <img src={list.Cloth} onClick={goInform}/>
        <h2>Top{list.Sale} </h2>
    </div>
}
export default Rank_item;