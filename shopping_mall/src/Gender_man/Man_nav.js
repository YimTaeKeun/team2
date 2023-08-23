import search_img from './man_img/search.png';
import React from 'react';
import { useState } from 'react';
const Man_nav = () => {
    const [state, setState] = useState();
    function changeText(){
        setState('https://www.musinsa.com/search/musinsa/integration?q=' + document.getElementById('search_input').value);
    }
    return <div className="sale_nav">
        <div></div>
        <h1 className='logo_name'><strong><a href='/'>TYH</a><a href='./Man'> Man</a></strong></h1>
        <div>
            <input id="search_input" type="text" placeholder="검색" className="search_input" onChange={changeText}/>
            <a href={state}><img src={search_img}/></a>
        </div>
    </div>
}
export default Man_nav;