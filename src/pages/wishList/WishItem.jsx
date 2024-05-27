
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';

const WishItem = () => {
    return (
        <S.WishItemWrapper>
            <FontAwesomeIcon className='like' icon={faHeart} />
            <div className='wishItem'>
                <Link to={'/detail'}>
                    <div className='imgWrapper'>
                        <img src={process.env.PUBLIC_URL + '/images/pages/wishList/room1.jpg'}/>
                    </div>
                    <div className='ItemInfo'>
                        <h1>
                        노을빛을 품은 감성 숙소, 선셋티아
                        </h1>
                        <div className='detailInfo'>
                            <S.span>
                                <h2>
                                    제주시/제주도
                                </h2>
                                <h2>
                                    ￦250,000
                                </h2>
                            </S.span>
                        </div>
                        <h2>
                            예약하기
                        </h2>
                    </div>
                    
                </Link>
            </div>
    
    
        </S.WishItemWrapper>
    );
};

export default WishItem;
