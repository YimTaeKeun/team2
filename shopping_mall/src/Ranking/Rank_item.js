import { useNavigate } from "react-router-dom";
const Rank_item = ({list}) => {
    const movePage = useNavigate();
    const CCLLOOTTHH_inform= list.CCLLOOTTHH;
    const sale = list.Rank;
    const CCLLOOTTHH_name = list.CCLLOOTTHH;
    function goInform(){
        movePage('/Product_inform/Product_inform?Cloth=' + CCLLOOTTHH_inform + "&Sale=" + sale + "&Name=" + CCLLOOTTHH_name);
    }
    return <div className='Rank_item'>
        <img src={list.CCLLOOTTHH} onClick={goInform}/>
        <h2>{list.Rank}% 번 째 인기!</h2>
    </div>
}
export default Rank_item;