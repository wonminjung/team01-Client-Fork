import React from 'react';
import ResetHeader from '../layout/ResetHeader';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
import BasicInput from '../../components/input/BasicInput';
import BasicCheckbox from '../../components/checkbox/BasicCheckbox';

const DetailContainer = () => {

    ResetHeader();

    const inputPlaceholder = "아무거나 입력해주세요!!";
    const tagId = "banana";
    
    return (
        <S.DetailContainer>
            디테일
            <ul>
                <li>li1</li>
                <li>li2</li>
            </ul>
            <div style={{margin:"30px"}}>
                <BasicButton>
                    버튼
                </BasicButton>

                <div style={{padding:"15px"}}></div>
                <BasicButton style={{width:"1000px"}}>
                    더보기
                </BasicButton>

                <div style={{padding:"15px"}}></div>
                <BasicButton style={{width:"100px", borderRadius: "40px", backgroundColor: "black"}}>
                    <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                        <div style={{width: "30px", height: "30px", backgroundImage: "url(./global/components/checkbox/check-solid.svg)"}}></div>
                        <div style={{width: "30px", height: "30px", backgroundImage: "url(./global/components/checkbox/check-solid.svg)"}}></div>
                    </div>
                </BasicButton>

                <div style={{padding:"15px"}}></div>
                <BasicInput placeholder={inputPlaceholder}/>

                <div style={{padding:"15px"}}></div>
                <BasicCheckbox tagId={tagId}/>바나나

                <div style={{padding:"15px"}}></div>
                
            </div>
        </S.DetailContainer>
    );
};

export default DetailContainer;