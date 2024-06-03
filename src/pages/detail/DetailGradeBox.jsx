import React from 'react';
import S from './style';

const DetailGradeBox = ({comment}) => {
    const title = ["청결도","정확도","의사소통","위치","가격 대비 만족도"]
    const gradeArray = [0,0,0,0,0]
    const maxLength = comment.length;
    const array5 = new Array([]);
    for(let i=0; i<5; i++){
        array5[i] = comment.filter((data)=> data.star === 5-i).length;
    }
    for(let i=0; i<maxLength; i++){
        gradeArray[0] += comment[i].grade.clean;
        gradeArray[1] += comment[i].grade.accuracy;
        gradeArray[2] += comment[i].grade.communication;
        gradeArray[3] += comment[i].grade.location;
        gradeArray[4] += comment[i].grade.priceSatis;
    }
    return (
        <S.DetailGradeBox>
            <ul>
                <li>
                    <div>
                        <p>전체평점</p>
                        {array5.map((div,i)=>
                            <div key={i}>
                                <div className='gradeNum'>{array5.length - i}</div>
                                <div className='barContainer'>
                                    <div className='bar' style={{width:`${array5[i] / maxLength * 100}%`}}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </li>
                {gradeArray.map((grade,i)=>
                    <li key={i}>
                        <div>
                            <p>{title[i]}</p>
                            <h3>{maxLength === 0? 0:(grade / maxLength).toFixed(1)}</h3>
                            <img src={`./images/pages/detail/gradeImg/img${i+1}.svg`} alt={`${title[i]}`} />
                        </div>
                    </li>
                )}
            </ul>
        </S.DetailGradeBox>
    );
};

export default DetailGradeBox;