import top_1 from '../Product_img/Top/Black_gardigan_boy.png';
import top_2 from '../Product_img/Top/Michigan_charcoal_boy.jpg';
import top_3 from '../Product_img/Top/Tshirt_adidas_boy.jpg';
import top_4 from '../Product_img/Top/Tshirt_white_boy.jpg';
import top_5 from '../Product_img/Top/Yaledog_boy.png';
import pants_1 from '../Product_img/Pants/Black_Slacks_boy.jpg';
import pants_2 from '../Product_img/Pants/Minimal_Pants_girl.jpg';

// import Man_item from'./Man_item';

const Man_list = () => {
    const clothes_top = {top_1:'블랙 가디건', top_2:'Michigan(차콜)', top_3:'아디다스 티셔츠', top_4:'흰 티셔츠', top_5:'예일도그 후드'};
    const clothes_bottom = {pants_1:'슬랙스(블랙)', pants_2:'미니멀팬츠(남녀공용)'};

    // let Woman_top_list=[];
    // let Woman_bottom_list=[];

    return <div className='Product_list'>
        <div id='Man_Top'>
            <h3>상의</h3>
            <div className='MainBody'>
                {Object.keys(clothes_top).map((key) => (
                    <div key={key} className='Product_item'>
                        <img src={clothes_top[key]} alt={clothes_top[key] + '사진'} />
                        <p>{clothes_top[key]}</p>
                    </div>
                ))}
            </div>
        </div>

        <div id='Man_Bottom'>
            <h3>하의</h3>
            <div className='MainBody'>
                {Object.keys(clothes_bottom).map((key) => (
                    <div key={key} className='Product_item'>
                        <img src={clothes_bottom[key]} alt={clothes_bottom[key] + '사진'} />
                        <p>{clothes_bottom[key]}</p>
                    </div>
                ))}
            </div>
        </div>

    </div>
}

export default Man_list;