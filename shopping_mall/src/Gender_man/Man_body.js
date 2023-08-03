import Man_list from "./Man_list";

const Man_body = ()=> {
    return <div>
        <div class="TopPants-Btn">
            <a href="#Man_Top"><input class="TPBtn" type = "button" value="상의"/></a>
            <a href="#Man_Bottom"><input class="TPBtn" type = "button" value="하의"/></a>
        </div>
        <Man_list/>
    </div>
}

export default Man_body;