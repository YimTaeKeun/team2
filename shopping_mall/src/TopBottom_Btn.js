const TopBottom_Btn= () => {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const scrollToBottom = () => {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    }

    return <div class="TopBottom-Btn">
        <button class="TBBtn" onClick={scrollToTop}>^</button>
        <button class="TBBtn" onClick={scrollToBottom}>v</button>
    </div>
}
export default TopBottom_Btn;