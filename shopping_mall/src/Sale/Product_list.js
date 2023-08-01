import top_1 from '../Product_img/Top/Tshirt_adidas_boy.jpg';
import pants_1 from '../Product_img/Pants/Black_Slacks_boy.jpg';
import top_2 from '../Product_img/Top/Hoodie_grey_girl.jpg';
import pants_2 from '../Product_img/Pants/Jogger_Pants_girl.jpg';
import top_3 from '../Product_img/Top/Tshirt_white_boy.jpg';
import pants_3 from '../Product_img/Top/Yaledog_boy.png';
import Product_item from './Product_item';
const Product_list = () => {
    const clothes = [top_1, pants_1, top_2, pants_2, top_3, pants_3, top_1, pants_1, top_2, pants_2, top_3, pants_3];
    const names = ["아디다스 티셔츠", "세미 와이드 히든 밴딩 슬랙스", "후드티(회색)", "조거 팬츠", "횐 티", "Yale Dog 후드티", "아디다스 티셔츠", "세미 와이드 히든 밴딩 슬랙스", "후드티(회색)", "조거 팬츠", "횐 티", "Yale Dog 후드티"];
    let product_list = []
    for(let i = 0; i < clothes.length; i++) product_list[i] = {Cloth: clothes[i], Sale: Math.floor(Math.random() * 95) + 5, Name: names[i]};
    product_list.sort(function(a, b){
        if (a.Sale < b.Sale) return 1;
        else if(a.Sale === b.Sale) return 0;
        else return -1;
    });
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