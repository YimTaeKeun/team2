import Main_nav_DownPopup from "./Main_nav_DownPopup";
const Main_nav_popup = ({list, down_popup}) => {
    return <div className="popup">
        {list}
        {/* 중도 포기 */}
        {/* {down_popup[list].map((each) => (<Main_nav_DownPopup down_popup={each} />))} */}
    </div>
}
export default Main_nav_popup;