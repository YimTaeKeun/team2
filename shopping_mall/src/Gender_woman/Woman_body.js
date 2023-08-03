import Woman_list from "./Woman_list";

const Woman_body = () => {
    return <div>
        <div class="TopPants-Btn">
            <a href="#Top"><input class="TPBtn" type = "button" value="상의"/></a>
            <a href="#Bottom"><input class="TPBtn" type = "button" value="하의"/></a>
        </div>
        <Woman_list/>
    </div>
}

export default Woman_body;