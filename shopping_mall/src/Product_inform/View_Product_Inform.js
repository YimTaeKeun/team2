import heartIMG from '../EtcSrc/heart.png';
import { useState } from 'react';
const View_Product_Inform = ({Cloth_name, Sale_imform, Cloth_Price}) => {
    const [state, setState] = useState(Math.floor(Math.random() * 1000) + 1);
    const upHeart = () => {
        setState(parseInt(document.getElementById('count').innerText) + 1);
    }
    return <div className="View_Product_Inform">
        <div className="cloth_name">
            상품명: {Cloth_name}
        </div>
        <div className="Size">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXS</div>
        </div>
        <div className="Price">
            할인가: {Cloth_Price}원
        </div>
        <div className="SalePercent">
            할인율: {Sale_imform}%
        </div>
        <div className="like_btn">
            <img src={heartIMG} onClick={upHeart}/>
            <div> 좋아요 <div className='count' id='count'>{state}</div>개</div>
        </div>
    </div>
}
export default View_Product_Inform;