import { useLocation, useSearchParams } from "react-router-dom";
const Body = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const Image_inform = searchParams.get("Cloth");
    const Sale_inform = searchParams.get('Sale');
    return <div className="Product_info">
        <img src={Image_inform}/>
    </div>
}
export default Body;