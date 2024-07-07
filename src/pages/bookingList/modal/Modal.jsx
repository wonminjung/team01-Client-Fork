import React from 'react';
import S from './style';

const Modal = ({message, onConfirm, onCancel, children, BasicButton, showButtons = true}) => {

    return (
        <S.ModalWrapper>
            <div className='modal'>
                <p>{message}</p>
                <div className='childrenContent'>
                    {children}
                    {BasicButton}
                </div>
                {/* showButtons가 true일때만 o, x 버튼 보이게 하기(wishList페이지 하트클릭시 아이템 제거 확인 모달창 전용) */}
                {showButtons && 
                    <div className='modal-buttons'>
                        <button className='okButton' onClick={onConfirm}>
                            <img src="./images/pages/bookingList/oCircle_r.svg" alt="확인버튼" />
                        </button>
                        <button className='okButton' onClick={onCancel}>
                            <img src="./images/pages/bookingList/xCircle_gray.svg" alt="취소버튼" />
                        </button>
                    </div>
                }     
            </div>
        </S.ModalWrapper>
    );
};

export default Modal;