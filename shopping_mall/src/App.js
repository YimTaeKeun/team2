import './App.css';
import Sale from './Sale/Sale';
import Appp from './Ranking/Appp';
import Product_inform from './Product_inform/Product_inform';

function App() {
  return (
    <div className="App">
      {/* 아래 코드는 Ranking 화면을 확인하기 위해 작성함 */}
      {/* <Appp/> */}
      <Sale />
      {/* <Product_inform /> */}
    </div>
  );
}

export default App;
