import React, { useState } from 'react';
import S from './style';
import WishItemContents from './WishItemContents';
import ResetHeader from '../layout/ResetHeader';
import RemoveHeader from '../layout/RemoveHeader';
import ScrollEvent from '../layout/ScrollEvent';
import NotWished from './NotWished';
import Modal from './modal/Modal';
import BasicButton from '../../components/button/BasicButton';
import { useNavigate } from 'react-router-dom';

const WishListContainer = () => {
    ResetHeader();
    ScrollEvent();
    // RemoveHeader();


    const navigate = useNavigate();

    // 모달 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(true); 

    // 모달창 닫는 함수
    const handleModalClose = () => {
        setIsModalOpen(false);
        // WishItemContents를 보이게 함
        setIsWished(true); 
    };

    // 유저가 찜한 숙소가 있는지 여부 상태
    const [isWished, setIsWished] = useState(true);


    return (
        <S.WishListContainer>
            <S.PageTitle>위시리스트</S.PageTitle>
            {/* 찜한 숙소가 있다면 바로 위시리스트 페이지 보이게 하기 */}
            {isWished ? <WishItemContents /> : (
                    <div>
                        {/* 찜한 숙소가 없다면 모달창 먼저 띄우기. */}
                         {isModalOpen && (
                            <Modal showButtons={false}>
                                <div className='modalDecorate'>
                                    <button  className="closeButton"  onClick={handleModalClose}>X</button>
                                    <div className='modalBody'>
                                        <img src="./images/pages/wishList/NotWished1.png" alt="숙소사진" />
                                        <h2>마음에 드는 숙소를 한곳에 저장해보세요!</h2>
                                        <h3>검색 중에 발견한 숙소를 위시리스트에 저장하려면<br /> 하트 아이콘을 클릭해보세요.</h3>
                                    </div> 
                                    <button className="searchButton"onClick={() => navigate('/')}>숙소 검색하러 가기</button>
                                </div> 
                            </Modal>
                         )} 
                    </div>
                )}

        </S.WishListContainer>
    );
};

export default WishListContainer;
