import './App.css';
import Sale from './Sale/Sale';
import Appp from './Ranking/Appp';
import Man from './Gender_man/Man';
import Woman from './Gender_woman/Woman';
import Main_nav from './Main_nav';

function App() {
  return (
    <div className="App">
      {/* 이 부분 부터 메인 화면을 꾸미기 위한 코드 입니다. */}
      <Main_nav />
      {/* --------------- */}

      {/* 아래 코드는 Ranking 화면을 확인하기 위해 작성함 */}
      {/* <Appp/> */}
      {/* <Sale /> */}
      {/* <Man/> */}
      {/* <Woman/> */}
    </div>
  );
}

export default App;
