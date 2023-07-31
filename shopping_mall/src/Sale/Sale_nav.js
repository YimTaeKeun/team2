import search_img from './img/search.png';
import Product_inform from '../Product_inform/Product_inform';
import React from 'react';
import { Route, Router } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
const Sale_nav = () => {
    const searchProduct = () => {
        console.log("hello");
        <Route path='./Product_inform/Product_inform' Component={Product_inform} />
    }
    // const navigate = useNavigate();
    // const searchProduct = () => {
    //     navigate("https://naver.com");
    //     document.querySelector('.search_input').value = "";
    // }
    return <div className="sale_nav">
        <div></div>
        <h1 className='logo_name'><strong><a href='../App.js'>태연희</a><a href='./Sale_nav'> 세일</a></strong></h1>
        <div>
            <input type="text" placeholder="검색" class="search_input"/>
            <img src={search_img} onClick={searchProduct}/>
        </div>
    </div>
}
export default Sale_nav;