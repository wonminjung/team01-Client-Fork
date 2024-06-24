import React, { useState } from 'react';
import BasicButton from '../../components/button/BasicButton';

const LeftNoticeBox = ({notice}) => {
    const [state, setState] = useState(0);
    const readMore = (e) => {
        setState(state === 1? 0 : 1);
    }
    return (
        <>
        <div className={`noticeBox ${state === 0? "" : "active"}`}>
            <h6>알아두어야 할 사항</h6>
            <p>숙소이용규칙</p>
            <p className="desc">에그비앤비 숙소는 다른 사람이 실제로 거주하는 집인 경우가 많으므로, 숙소를 소중히 다뤄주세요.</p>
            <p className="listTitle">체크인 및 체크아웃</p>
            <ul>
                {notice[0].map((no,i)=><li key={i} className={`dIcon ${no.icon}`}>{no.content}</li>)}
            </ul>
            <p className="listTitle">숙박중</p>
            <ul>
                {notice[1].map((no,i)=><li key={i} className={`dIcon ${no.icon}`}>{no.content}</li>)}
            </ul>
        </div>
        <BasicButton onClick={readMore}>{state === 0? "더보기":"줄이기"}</BasicButton>
        </>
    );
};

export default LeftNoticeBox;