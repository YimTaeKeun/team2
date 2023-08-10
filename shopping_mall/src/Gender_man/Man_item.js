import { useNavigate } from "react-router-dom";
const Man_item = ({list}) => {
    const movePage = useNavigate();
    const Cloth_inform = list.Cloth;
    const Cloth_name = list.Name;
    function goInform(){
        movePage('/Product_inform/Product_inform?Cloth=' + Cloth_inform + "&Name=" + Cloth_name);
    }
    return <div className='Product_item'>
        <img src={list.Cloth} onClick={goInform}/>
        <h2>{list.Name}</h2>
    </div>
}
export default Man_item;