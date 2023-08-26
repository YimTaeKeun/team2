import { useState } from "react";
import View_Review_Items from "./View_Review_Items";
const View_Review = () => {
    const [reviewBox, setReviewBox] = useState("");
    const [reviews, setReviews] = useState([]);
    const onChangeBox = () => {
        setReviewBox(document.getElementById('review_box').value);
    }
    const clickBtn = () => {
        setReviews([...reviews, reviewBox]);
        setReviewBox("");
        console.log(reviews);
    }
    return <div className="view_review">
        <div>
            <input type="text" placeholder="리뷰를 입력해주세요." style={{width:'1080px', height:'30px'}} value={reviewBox} id="review_box" onChange={onChangeBox}/>
            <button onClick={clickBtn}>입력하기</button>
        </div>
        <div className="review_list">
            {reviews.map((each) => (<View_Review_Items txt={each}/>))}
        </div>
    </div>
}
export default View_Review;