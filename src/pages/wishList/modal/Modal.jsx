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
                {showButtons && 
                    <div className='modal-buttons'>
                        <button onClick={onConfirm}>
                            <img src="./images/pages/wishList/checkButton.svg" alt="확인버튼" />
                        </button>
                        <button onClick={onCancel}>
                            <img src="./images/pages/wishList/cancelButton.svg" alt="취소버튼" />
                        </button>
                    </div>
                }
                
            </div>
        </S.ModalWrapper>
    );
};

export default Modal;