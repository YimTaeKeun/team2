import { useState } from "react";
const View_Review = () => {
    const [reviewBox, setReviewBox] = useState("");
    const onChangeBox = () => {
        setReviewBox(document.getElementById('review_box').value);
    }
    return <div className="view_review">
        <input type="text" placeholder="리뷰를 입력해주세요." style={{width:'1080px', height:'30px'}} value={reviewBox} id="review_box" onChange={onChangeBox}/>
        <button>입력하기</button>
    </div>
}
export default View_Review;