import top_1 from '../Product_img/Top/Tshirt_adidas.jpg';
import pants_1 from '../Product_img/Pants/Black_Slacks.jpg';
import top_2 from '../Product_img/Top/Hoodie_grey.jpg';
import pants_2 from '../Product_img/Pants/Jogger_Pants.jpg';
import top_3 from '../Product_img/Top/Tshirt_white.jpg';
import pants_3 from '../Product_img/Pants/Minimal_Pants.jpg';
import Product_item from './Product_item';
const Product_list = () => {
    const clothes = [top_1, pants_1, top_2, pants_2, top_3, pants_3, top_1, pants_1, top_2, pants_2, top_3, pants_3];
    let product_list = []
    for(let i = 0; i < clothes.length; i++) product_list[i] = {Cloth: clothes[i], Sale: Math.floor(Math.random() * 100)};
    return <div className='Product_list'>
        <div>
        <h4>할인율이 제일 높은 순을 기준으로 정렬했습니다.</h4>
        </div>
        <div className="MainBody">
        {product_list.map((each) => (<Product_item list={each}/>))}
        </div>
        
    </div>
}
export default Product_list;