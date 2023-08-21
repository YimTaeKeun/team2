const View_Product_Inform = ({Cloth_name, Sale_imform}) => {
    return <div className="View_Product_Inform">
        <div className="cloth_name">
            {Cloth_name}
        </div>
        <div className="Size">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXS</div>
        </div>
    </div>
}
export default View_Product_Inform;