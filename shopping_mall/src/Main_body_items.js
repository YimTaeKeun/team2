import { useNavigate } from "react-router-dom";
const Main_body_items = ({each}) => {
    const movePage = useNavigate();
    const Cloth_inform = each.Cloth;
    const sale = each.Sale;
    const Cloth_name = each.Name;
    const price = each.Price;
    function goInform(){
        movePage('/Product_inform/Product_inform?Cloth=' + Cloth_inform + "&Sale=" + sale + "&Name=" + Cloth_name + "&Price=" + price);
    }
    return <div className="Product_item home">
        <img src={each.Cloth} onClick={goInform} />
        <h2>{Cloth_name}</h2>
    </div>
}
export default Main_body_items;