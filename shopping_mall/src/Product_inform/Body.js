import { useLocation, useSearchParams } from "react-router-dom";
import View_Product_Inform from "./View_Product_Inform";
import View_Product_Img from "./View_Product_Img";
import View_Review from "./View_Review";
const Body = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const Image_inform = searchParams.get("Cloth");
    const Sale_inform = searchParams.get('Sale');
    const Cloth_name = searchParams.get('Name');
    const Cloth_Price = searchParams.get('Price');
    return <div className="Product_info">
        <View_Product_Img img_src={Image_inform} />
        <View_Product_Inform Cloth_name={Cloth_name} Sale_imform={Sale_inform} Cloth_Price={Cloth_Price}/>
        <View_Review />
        {/* 아래 코드는 디버깅 용도로 남겨둔 것임 */}
        {/* <h1>{Cloth_name}</h1> */}
    </div>
}
export default Body;