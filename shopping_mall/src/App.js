import './App.css';
import Sale from './Sale/Sale';
import Appp from './Ranking/Appp';
import Man from './Gender_man/Man';
import Woman from './Gender_woman/Woman';
import Main_nav from './Main_nav';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const searchProduct = () => {
  //   <Route path='./Product_inform/Product_inform' Component={Product_inform} />
  // }
  return (
    <div className="App">
      {/* 앞으로 App.js는 건들지 말것. 본인 페이지를 확인하고 싶으면 url을 건드려서 이동 */}
      {/* 예시:  http://localhost:3000/Sale/Sale    */}
      {/* localhost:3000 옆에 아래 코드의 path 부분을 덧붙이면 그 페이지로 이동하게됨 */}
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />}></Route>
        <Route path={"/Sale/Sale"} element={<Sale />}></Route>
        <Route path={"/Ranking/APPP"} element={<Appp />}></Route>
        <Route path={"/Gender_man/Man"} element={<Man />}></Route>
        <Route path={"/Gender_man/Woman"} element={<Woman />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
