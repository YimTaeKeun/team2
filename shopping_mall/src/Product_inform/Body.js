import { useLocation, useSearchParams } from "react-router-dom";
const Body = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const Image_inform = searchParams.get("Cloth");
    const Sale_inform = searchParams.get('Sale');
    const Cloth_name = searchParams.get('Name');
    return <div className="Product_info">
        <img src={Image_inform}/>
        <h1>{Cloth_name}</h1>
    </div>
}
export default Body;