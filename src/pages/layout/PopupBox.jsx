import React from 'react';

const PopupBox = React.forwardRef(({modalIsOpen,setModalIsOpen,setInputValue},inputRef) => {
    const travelList = ["서울","경기","제주도","인천","경주","여수","대구","강릉","전주","대전","통영","남해","거제","광주","울산","수원","평창","춘천","가평","태안","고양"];
    const travelTo = (e) => {
        setModalIsOpen(false);
        setInputValue(e.target.innerText);
        inputRef.current.value = e.target.innerText;
    }
    return (
        <div className={`popup location`} style={{display: modalIsOpen? "block":"none"}}>
            <div className="content">
                {travelList.map((list,i)=>
                    <div key={i}><span onClick={travelTo}>{list}</span></div>
                )}
            </div>
        </div>
    );
})

export default PopupBox;