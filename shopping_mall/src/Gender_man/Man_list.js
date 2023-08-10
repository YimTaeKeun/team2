import top_1 from '../Product_img/Top/Black_gardigan_boy.png';
import top_2 from '../Product_img/Top/Michigan_charcoal_boy.jpg';
import top_3 from '../Product_img/Top/Tshirt_adidas_boy.jpg';
import top_4 from '../Product_img/Top/Tshirt_white_boy.jpg';
import top_5 from '../Product_img/Top/Yaledog_boy.png';
import pants_1 from '../Product_img/Pants/Black_Slacks_boy.jpg';
import pants_2 from '../Product_img/Pants/Minimal_Pants_girl.jpg';

import Man_item from'./Man_item';

const Man_list = () => {
    const clothes_top = {
        top_1: {Cloth: top_1, Name: '블랙 가디건'},
        top_2: {Cloth: top_2, Name: 'Michigan(차콜)'},
        top_3: {Cloth: top_3, Name: '아디다스 티셔츠'},
        top_4: {Cloth: top_4, Name: '흰 티셔츠'},
        top_5: {Cloth: top_5, Name: '예일도그 후드'}
    };
    const clothes_bottom = {
        pants_1: {Cloth: pants_1, Name: '슬랙스(블랙)'},
        pants_2: {Cloth: pants_2, Name: '미니멀팬츠(남녀공용)'}
    };

    // let Woman_top_list=[];
    // let Woman_bottom_list=[];

    return <div className='Product_list'>
        <div id='Man_Top'>
            <h3>상의</h3>
            <div className='MainBody'>
                {Object.keys(clothes_top).map((key) => (
                    <Man_item key={key} list={clothes_top[key]}/>
                ))}
            </div>
        </div>

        <div id='Man_Bottom'>
            <h3>하의</h3>
            <div className='MainBody'>
                {Object.keys(clothes_bottom).map((key) => (
                    <Man_item key={key} list={clothes_bottom[key]}/>
                ))}
            </div>
        </div>

    </div>
}

export default Man_list;