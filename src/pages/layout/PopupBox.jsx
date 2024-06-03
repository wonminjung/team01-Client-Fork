import React from 'react';

const PopupBox = React.forwardRef(({popup},popUpRef) => {
    const travelList = ["서울","경기","제주도","인천","경주","여수","대구","강릉","전주","대전","통영","남해","거제","광주","울산","수원","평창","춘천","가평","태안","고양"];
    const travelTo = (e) => {
        console.log(e.target.innerText)
    }
    const children = "";
    if(popup === "location"){
        console.log("location");
    }else if(popup === "checkIn"){
        console.log("checkIn");
    }else if(popup === "guest"){
        console.log("guest");
    }
    return (
        <div className={`popup popupItem ${popup}`} ref={popUpRef}>
            <div className="content">
                {travelList.map((list,i)=>
                    <div key={i}><span className='popupItem' onClick={travelTo}>{list}</span></div>
                )}
            </div>
        </div>
    );
})

export default PopupBox;