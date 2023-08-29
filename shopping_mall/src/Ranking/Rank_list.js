import hoodyhoody1 from '../Product_img/Top/Yaledog_boy.png';
import hoody_2 from '../Product_img/Top/Yaledog_boy.png'
import blackgardigan from '../Product_img/Top/Black_gardigan_boy.png';
import bluebluegirl from '../Product_img/Top/Blueshirt_girl.png';
import pants_2 from '../Product_img/Pants/Jogger_Pants_girl.jpg';
import handsomeboy from '../Product_img/Top/Michigan_charcoal_boy.jpg';
import adidasgirlboy from '../Product_img/Top/Tshirt_adidas_boy.jpg'
import pants_3 from '../Product_img/Pants/Jogger_Pants_girl.jpg';
import Rank_product from './Rank_product';

const Rank_list = () => {
    const Clothes_name = [hoodyhoody1,hoody_2, pants_3, bluebluegirl,blackgardigan,pants_2,handsomeboy,adidasgirlboy];
    let Rank_list = []
    for(let i = 0; i < Clothes_name.length; i++) Rank_list[i] = {CCLLOOTTHH: Clothes_name[i], Rank: i + 1, Name:Clothes_name[i]};
    Rank_list.sort(function(a, b){
        if (a.Rank > b.Rank) return 1;
        else if(a.Rank === b.Rank) return 0;
        else return -1;
    });
    return (
        <div className='Rank_list'>
            <div>
                <h4>인기가 높은 순을 기준으로 정렬했습니다.</h4>
            </div>
            <div className="MainBody">
                {Rank_list.map((each) => (<Rank_product list={each}/>))}
            </div>
        </div>
    );
}

export default Rank_list;