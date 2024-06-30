import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ImageModal = ({roomImg, setImgModalState}) => {
    const closeModal = () => {
        setImgModalState(false)
        let offset = document.body.style.top;
        document.body.style.position = "unset";
        document.body.style.top = "unset";
        document.body.style.overflowY = "unset";
        document.body.style.width = "unset";
        window.scrollTo(0, offset.slice(0,-2) * -1);
    }
    return (
        <div className='imgModalBox'>
            <button type='button' className='closeModalBtn' onClick={closeModal}><FontAwesomeIcon icon={faXmark}/></button>
            <div className="modalContent" onClick={closeModal}>
                {roomImg.map((img,i)=>
                    <div key={i}>
                        <img src={img} alt={`이미지${i}`} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageModal;