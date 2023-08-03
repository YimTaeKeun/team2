import top_1 from '../Product_img/Top/Blueshirt_girl.png';
import top_2 from '../Product_img/Top/Hoodie_grey_girl.jpg';
import pants_1 from '../Product_img/Pants/Jogger_Pants_girl.jpg';
import pants_2 from '../Product_img/Pants/Minimal_Pants_girl.jpg';

// import Woman_item from'./Woman_item';

const Woman_list = () => {
    const clothes_top = {top_1:'블루블루셔츠', top_2:'호호 심플후드'};
    const clothes_bottom = {pants_1:'나이스조거팬츠', pants_2:'미니멀팬츠(남녀공용)'};

    // let Woman_top_list=[];
    // let Woman_bottom_list=[];

    return <div className='Product_list'>
        <div id='Woman_Top'>
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

        <div id='Woman_Bottom'>
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

export default Woman_list;