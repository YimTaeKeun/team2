import Woman_list from "./Woman_list";

const Woman_body = () => {
    return <div>
        <div class="TopPants-Btn">
            <input class="TPBtn" type = "button" value="상의"/>
            <input class="TPBtn" type = "button" value="하의"/>
        </div>
        <Woman_list/>
    </div>
}

export default Woman_body;