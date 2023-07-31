import hoodyhoody1 from '../Product_img/Top/Yaledog_boy.png';
import blackgardigan from '../Product_img/Top/Black_gardigan_boy.png';
import bluebluegirl from '../Product_img/Top/Blueshirt_girl.png';
import Rank_product from './Rank_product';
const Rank_list = () => {
    const heejae = [hoodyhoody1, bluebluegirl,blackgardigan];
    let Rank_list = []
    for(let i = 0; i < heejae.length; i++) Rank_list[i] = {CCLLOOTTHH: heejae[i], like: Math.floor(Math.random() * 100)};
    return <div className='Rank_list'>
        <div>
        <h4>인기가 높은 순을 기준으로 정렬했습니다.</h4>
        </div>
        <div className="MainBody">
        {Rank_list.map((each) => (<Rank_product list={each}/>))}
        </div>
        
    </div>
}
export default Rank_list;