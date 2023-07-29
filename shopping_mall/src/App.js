import './App.css';
import Sale from './Sale/Sale';
import Appp from './Ranking/Appp';
import Man from './Gender_man/Man';
import Woman from './Gender_woman/Woman';

function App() {
  return (
    <div className="App">
      {/* 아래 코드는 Ranking 화면을 확인하기 위해 작성함 */}
      {/* <Appp/> */}
      {/* <Sale /> */}
      <Man/>
      {/* <Woman/> */}
    </div>
  );
}

export default App;
