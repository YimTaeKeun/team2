import TopBottom_Btn from "../TopBottom_Btn";
import Woman_list from "./Woman_list";

const Woman_body = () => {
    return <div>
        <div className="TopPants-Btn">
            <a href="#Woman_Top"><input className="TPBtn" type = "button" value="상의"/></a>
            <a href="#Woman_Bottom"><input className="TPBtn" type = "button" value="하의"/></a>
        </div>
        <Woman_list/>
        <TopBottom_Btn/>
    </div>
}

export default Woman_body;