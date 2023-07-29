const Rank_item = ({list}) => {
    return <div className='Rank_item'>
        <img src={list.CCLLOOTTHH}/>
        <h2>{list.like}번 째 랭킹</h2>
    </div>
}
export default Rank_item;