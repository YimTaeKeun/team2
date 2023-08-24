const Product_item = ({ list }) => {
    const imageStyle = {
      border: '2px solid #ccc', // 테두리 스타일 및 두께를 설정합니다.
    };
  
    const textStyle = {
      textAlign: 'center',
    };
  
    return (
      <div className='Product_item'>
        <img src={list.CCLLOOTTHH} style={imageStyle} alt={`Product ${list.Rank}`} />
        <h2 style={textStyle}>Top {list.Rank}</h2>
      </div>
    );
  }
  
  export default Product_item;
  