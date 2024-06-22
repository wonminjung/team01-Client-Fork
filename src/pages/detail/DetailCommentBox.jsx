import React from 'react';
import S from './style';
import BasicButton from '../../components/button/BasicButton';

const DetailCommentBox = ({commentData,allUserData,setpopup1State}) => {
    const allCommentAction = () => {
        setpopup1State(true);
        let scrollY = "";
        scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = "-"+scrollY+"px";
        document.body.style.overflowY = "scroll";
        document.body.style.width = "100%";
    }
    return (
        <S.DetailCommentBox>
            <div>
                {commentData.map((comment,i)=>
                    <div key={i} className='commentCard'>
                        <div className="commentTBox">
                            <div>
                                <div className="commentImg">
                                    <img src={allUserData.filter((user)=>user.userId === comment.userId)[0].profileImg} alt="유저 프로필사진" />
                                </div>
                                <div className="commentId">{comment.userId}</div>
                            </div>
                            <div>
                                <span className='starBox'>
                                    <span className="star" style={{width: `${comment.star * 20}` + "%"}}></span>
                                </span>
                            </div>
                        </div>
                        <div className="commentBBox">
                            <p>{comment.body}</p>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <BasicButton onClick={allCommentAction}>후기 전체보기</BasicButton>
            </div>
        </S.DetailCommentBox>
    );
};

export default DetailCommentBox;