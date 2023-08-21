const View_Product_Inform = ({Cloth_name, Sale_imform}) => {
    return <div className="View_Product_Inform">
        <div className="cloth_name">
            상품명: {Cloth_name}
        </div>
        <div className="Size">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXS</div>
        </div>
        <div className="Price">
            할인가: {Math.floor(Math.random() * 100000) + 1000}원
        </div>
        <div className="SalePercent">
            할인율: {Sale_imform}%
        </div>
    </div>
}
export default View_Product_Inform;