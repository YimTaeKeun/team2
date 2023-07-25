import one from './img/1.png';
import two from './img/2.png';
import three from './img/3.png';
import four from './img/4.png';
import five from './img/5.png';
const Ad = () => {
    let img_arr = [one, two, three, four, five];
    let a = Math.floor(Math.random() * 5);
    let path = './img/' + a + '.png';
    return <div className='Ad'>
        <img src={img_arr[a]}/>
    </div>
}
export default Ad;