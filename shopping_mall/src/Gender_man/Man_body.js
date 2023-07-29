import Man_list from "./Man_list";

const Man_body = ()=> {
    return <div>
        <div class="TopPants-Btn">
            <input class="TPBtn" type = "button" value="상의"/>
            <input class="TPBtn" type = "button" value="하의"/>
        </div>
        <Man_list/>
    </div>
}

export default Man_body;