import top_1 from '../Product_img/Top/Blueshirt_girl.png';
import top_2 from '../Product_img/Top/Hoodie_grey_girl.jpg';
import pants_1 from '../Product_img/Pants/Jogger_Pants_girl.jpg';
import pants_2 from '../Product_img/Pants/Minimal_Pants_girl.jpg';

import Woman_item from'./Woman_item';

const Woman_list = () => {
    const clothes_top = {
        top_1: {Cloth: top_1, Name: '블루블루셔츠'},
        top_2: {Cloth: top_2, Name: '호호 심플후드'}
    };
    const clothes_bottom = {
        pants_1: {Cloth: pants_1, Name: '나이스조거팬츠'},
        pants_2: {Cloth: pants_2, Name: '미니멀팬츠(남녀공용)'}
    };

    // let Woman_top_list=[];
    // let Woman_bottom_list=[];

    return <div className='Product_list'>
        <div id='Woman_Top'>
            <h3>상의</h3>
            <div className='MainBody'>
                {Object.keys(clothes_top).map((key) => (
                    <Woman_item key={key} list={clothes_top[key]}/>
                ))}
            </div>
        </div>

        <div id='Woman_Bottom'>
            <h3>하의</h3>
            <div className='MainBody'>
                {Object.keys(clothes_bottom).map((key) => (
                    <Woman_item key={key} list={clothes_bottom[key]}/>
                ))}
            </div>
        </div>

    </div>
}

export default Woman_list;