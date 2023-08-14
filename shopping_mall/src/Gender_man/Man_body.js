import Man_list from "./Man_list";
import TopBottom_Btn from "../TopBottom_Btn";

const Man_body = ()=> {
    return <div>
        <div className="TopPants-Btn">
            <a href="#Man_Top"><input className="TPBtn" type = "button" value="상의"/></a>
            <a href="#Man_Bottom"><input className="TPBtn" type = "button" value="하의"/></a>
        </div>
        <Man_list/>
        <TopBottom_Btn/>
    </div>
}

export default Man_body;