import onead from './advimg/Advertisementment.png';
const Ad = () => {
    let img_arr = [onead];
    let a = Math.floor(Math.random() * 5);
    let path = './advimg/' + a + '.png';
    return <div className='Adad'>
        <img src={img_arr[a]}/>
    </div>
}
export default Ad;