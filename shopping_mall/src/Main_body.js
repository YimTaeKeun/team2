import black_gardigan_boy from './Product_img/Top/Black_gardigan_boy.png';
import Hoodie_grey_girl from './Product_img/Top/Hoodie_grey_girl.jpg';
import Michigan_charcoal_boy from './Product_img/Top/Michigan_charcoal_boy.jpg';
import Tshirt_adidas_boy from './Product_img/Top/Tshirt_adidas_boy.jpg';
import Tshirt_white_boy from './Product_img/Top/Tshirt_white_boy.jpg';
import Yaledog_boy from './Product_img/Top/Yaledog_boy.png';

import Black_Slacks_boy from './Product_img/Pants/Black_Slacks_boy.jpg';
import Jogger_Pants_girl from './Product_img/Pants/Jogger_Pants_girl.jpg';
import Minimal_Pants_girl from './Product_img/Pants/Minimal_Pants_girl.jpg';

import Main_body_items from './Main_body_items';

const Main_body = () => {
    const clothes_top = [
        black_gardigan_boy,
        Hoodie_grey_girl,
        Michigan_charcoal_boy,
        Tshirt_adidas_boy,
        Tshirt_white_boy,
        Yaledog_boy
    ];
    const names_top = [
        "블랙 가디건",
        "후드티(회색)",
        "Michigan(차콜)",
        "아디다스 티셔츠",
        "흰 티셔츠",
        "Yale Dog 후드티"
    ];
    const names_bottom = [
        "세미 와이드 히든 밴딩 슬랙스",
        "조거 팬츠",
        "미니멀 팬츠"
    ];
    const clothes_bottom = [
        Black_Slacks_boy,
        Jogger_Pants_girl,
        Minimal_Pants_girl
    ];
    let product_list_top = []
    for(let i = 0; i < clothes_top.length; i++) product_list_top[i] = {Cloth: clothes_top[i], Sale: Math.floor(Math.random() * 95) + 5, Name: names_top[i], Price: Math.floor(Math.random() * 10000) * 10 + 1000};
    let product_list_bottom = []
    for(let i = 0; i < clothes_bottom.length; i++) product_list_bottom[i] = {Cloth: clothes_bottom[i], Sale: Math.floor(Math.random() * 95) + 5, Name: names_bottom[i], Price: Math.floor(Math.random() * 10000) * 10 + 1000};
    return <div className="Main_body" style={{marginTop:'50px'}}>
        <div style={{fontSize: '25px', marginLeft: '25px', marginBottom: '10px'}}>상의</div>
        <div className="Top Box">
            {product_list_top.map((each) => (<Main_body_items each={each} />))}
        </div>
        <div style={{fontSize: '25px', marginLeft: '25px', marginTop: '50px', marginBottom: '10px'}}>하의</div>
        <div className="Bottom Box">
            {product_list_bottom.map((each) => (<Main_body_items each={each} />))}
        </div>
    </div>
}
export default Main_body;