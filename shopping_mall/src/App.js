import './App.css';
import Sale from './Sale/Sale';
import Appp from './Ranking/Appp';
import Man from './Gender_man/Man';
import Woman from './Gender_woman/Woman';
import Main_nav from './Main_nav';
import Main from './Main';
import Product_inform from './Product_inform/Product_inform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* 앞으로 App.js는 건들지 말것. 본인 페이지를 확인하고 싶으면 url을 건드려서 이동 */}
      {/* 예시:  http://localhost:3000/Sale/Sale    */}
      {/* localhost:3000 옆에 아래 코드의 path 부분을 덧붙이면 그 페이지로 이동하게됨 */}
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/Sale"} element={<Sale />}></Route>
        <Route path={"/Ranking"} element={<Appp />}></Route>
        <Route path={"/Man"} element={<Man />}></Route>
        <Route path={"/Woman"} element={<Woman />}></Route>
        <Route path={"/Product_inform/Product_inform"} element={<Product_inform />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
