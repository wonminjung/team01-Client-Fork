import React, { useEffect } from 'react';
import S from './style';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import PrevButton from './PrevButton';
import { useSearchParams } from 'react-router-dom';


const ReservationContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const roomId = searchParams.get("roomId");
    const sdate = searchParams.get("sdate");
    const edate = searchParams.get("edate");
    const guests = searchParams.get("guests");
    const infants = searchParams.get("infants");
    const newEdate = new Date(edate);
    const newSdate = new Date(sdate);
    const days = newEdate.getDate() - newSdate.getDate();
    console.log(newEdate, newSdate, days);
    const datas = {
        roomId, newSdate, newEdate, guests, infants
    };

    // const [room, setRoom] = useState({});
    // const [user, setUser] = useState({});
    return (
        <S.ReservationContainer>
            <div className='bodyTop'>
                <PrevButton />
                <h2>확인 및 결제</h2>
            </div>
            <div className='LRcontainer'>
                <LeftSide datas={datas}/>
                <RightSide days={days} />
            </div>
        </S.ReservationContainer>
    );
};

export default ReservationContainer