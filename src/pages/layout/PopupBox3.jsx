import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const PopupBox3 = ({modal3IsOpen,guestState,setGuestState,childState,setChildState}) => {
    const setTwo = () =>{
        setGuestState(0)
        setChildState(0)
    }
    const guestMinus = () => {guestState<2? setTwo() : setGuestState(guestState - 1)};
    const guestPlus = () => {setGuestState(guestState + 1)};
    const childMinus = () => {childState<1? setChildState(0) : setChildState(childState - 1)};
    const childPlus = () => {guestState<1? setChildState(0) : setChildState(childState + 1)};
    return (
        <div className={`popup guest`} style={{display: modal3IsOpen? "block":"none"}}>
            <div className="content">
                <ul>
                    <li>
                        <div>
                            <h6>게스트</h6>
                            <p>2세 이상</p>
                        </div>
                        <div>
                            <button type='button' onClick={guestMinus}><FontAwesomeIcon icon={faMinus} /></button>
                            <span>{guestState}</span>
                            <button type='button' onClick={guestPlus}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </li>
                    <hr />
                    <li>
                        <div>
                            <h6>유아</h6>
                            <p>2세 미만</p>
                        </div>
                        <div>
                            <button type='button' onClick={childMinus}><FontAwesomeIcon icon={faMinus} /></button>
                            <span>{childState}</span>
                            <button type='button' onClick={childPlus}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PopupBox3;