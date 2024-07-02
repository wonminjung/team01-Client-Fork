import React, { useRef, useState } from 'react';
import PostModal from './PostModal';
import PopupPostCode from './PopupPostCode';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import BasicButton from '../../components/button/BasicButton';
import { useDispatch, useSelector } from 'react-redux';


const InfoBox = ({setAddress, info}) => {
    // 로그인된 유저 id
    const currentUser = useSelector((state)=>state.user.currentUser);
    const _id = currentUser._id;
        
    const dispatch = useDispatch();
        
    // 모달창 state
    const [modalState, setModalState] = useState(false);
    // 모달제목 state
    const [title, setTitle] = useState("");
    // 모달컨텐츠 state
    const [content, setContent] = useState(<></>);
    // 모달 input 레퍼런스
    const inputRef = useRef(null);


    // 우편번호 모달창 state
    const [postModal, setPostModal] = useState(false);
    // 우편번호 input 레퍼런스
    const post1Ref = useRef(null);
    const post2Ref = useRef(null);
    const post3Ref = useRef(null);
    // 우편번호 input3 value state
    const [post3Val, setPost3Val] = useState("");
    const changePost3Val = (e) => {
        setPost3Val(e.target.value)
    }
    // fetch로 보낼 body정보 state
    const [modify, setModify] = useState([{_id : _id}, {}]);



    // 주소수정 이벤트
    const modifyAddress = () => {
        setModify([{_id : _id}, {}])
        setModalState(true)
        console.log("address")
        setTitle("주소")
        setContent(<div className='postInputBox'>
            <div><input type="text" ref={post1Ref} className='disabledPostInput' disabled={true} placeholder='우편번호'/><button type='button' onClick={openPostModal}>주소 검색</button></div>
            <div><input type="text" ref={post2Ref} className='disabledPostInput' disabled={true} placeholder='주소를 입력하세요.'/></div>
            <div><input type="text" ref={post3Ref} placeholder='상세주소를 입력해주세요.' onChange={changePost3Val}/></div>
        </div>)
    }

    // 모달창 닫기
    const closeModal = () => {
        setModalState(false);
    }
    // 주소 모달창 열기
    const openPostModal = () => {
        setPostModal(true)
    }
    // 주소 모달창 닫기
    const closePostModal = () => {
        setPostModal(false)
    }

    // 주소 입력창에 넣기
    const putAddress = () => {
        // setModify(modify[1] = {address : post2Ref.current.value + ` ${post3Val}` })
        // putAddressInfo()
        // updateUserInfo()


        // 주소 넣기
        const fullAddress = post2Ref.current.value + `${post3Val}`;
        setModify(modify[1] = {address : fullAddress});

        // if(addressInputRef && addressInputRef.current){
        //     addressInputRef.current.placeholder = fullAddress;
        // }

        setAddress(fullAddress);

        setModalState(false)
    }

    return (
        <>
        <S.InfoBox>
            <div className='infoBox'>
                <div>
                    <button type='button' className='address' onClick={modifyAddress}>주소찾기</button>
                </div>
            </div>
        </S.InfoBox>
        {modalState?
        <div className='modifyModal'>
            <div className='modalBox'>
                <div className="modalHeader">
                    <button type='button' onClick={closeModal}><FontAwesomeIcon icon={faXmark}/></button>
                    <h2>주소찾기</h2>
                </div>
                <div id='contentBox' className="modalContent">
                    {content}
                </div>
                <div className="modalFooter">
                    <BasicButton type="button" onClick={putAddress}>완료</BasicButton>
                </div>
            </div>
        </div>
        :<></>}
        {postModal?
        <PostModal>
            <PopupPostCode post1Ref={post1Ref} post2Ref={post2Ref} onClose={closePostModal}/>
        </PostModal>
        :<></>}
        </>
    );
};

export default InfoBox;