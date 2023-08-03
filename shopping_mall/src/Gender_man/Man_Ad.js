import a from './ad_img/001.png';
import b from './ad_img/002.png';
import c from './ad_img/003.png';

const Man_Ad = () => {
    let img_arr = [a, b, c];
    let ad = Math.floor(Math.random()*3);
    let path = './ad_img/' + '.png';

    return <div className='Ad'>
        <img src={img_arr[ad]}/>
    </div>
}

export default Man_Ad;