const TopBottom_Btn= () => {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const scrollToBottom = () => {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    }

    return <div className="TopBottom-Btn">
        <button className="TBBtn" onClick={scrollToTop}>Top</button>
        <button className="TBBtn" onClick={scrollToBottom}>Bottom</button>
    </div>
}
export default TopBottom_Btn;