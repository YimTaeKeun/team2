import one_top from '../Product_img/Top/Tshirt_adidas.jpg';
import one_pants from '../Product_img/Pants/Black_Slacks.jpg';
import Product_item from './Product_item';
const Product_list = () => {
    const clothes = [one_top, one_pants];
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