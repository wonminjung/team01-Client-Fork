import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const PopupBox3 = ({modal3IsOpen,guestsState,setguestsState,infantsState,setInfantsState}) => {
    const setTwo = () =>{
        setguestsState(0)
        setInfantsState(0)
    }
    const guestsMinus = () => {guestsState<2? setTwo() : setguestsState(guestsState - 1)};
    const guestsPlus = () => {setguestsState(guestsState + 1)};
    const infantsMinus = () => {infantsState<1? setInfantsState(0) : setInfantsState(infantsState - 1)};
    const infantsPlus = () => {guestsState<1? setInfantsState(0) : setInfantsState(infantsState + 1)};
    return (
        <div className={`popup guests`} style={{display: modal3IsOpen? "block":"none"}}>
            <div className="content">
                <ul>
                    <li>
                        <div>
                            <h6>게스트</h6>
                            <p>2세 이상</p>
                        </div>
                        <div>
                            <button type='button' onClick={guestsMinus}><FontAwesomeIcon icon={faMinus} /></button>
                            <span>{guestsState}</span>
                            <button type='button' onClick={guestsPlus}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </li>
                    <hr />
                    <li>
                        <div>
                            <h6>유아</h6>
                            <p>2세 미만</p>
                        </div>
                        <div>
                            <button type='button' onClick={infantsMinus}><FontAwesomeIcon icon={faMinus} /></button>
                            <span>{infantsState}</span>
                            <button type='button' onClick={infantsPlus}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PopupBox3;