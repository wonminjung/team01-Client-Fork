import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style';

// 부모 컴포넌트에게 prop으로 콜백함수를 받아 클릭 이벤트 처리하기.
const HeartButton = ({onClick} ) => {
    return (
        <div>
             <S.HeartBtn>
                <FontAwesomeIcon onClick={onClick} className='heart' icon={faHeart} />
             </S.HeartBtn>
        </div>

    );
};
export default HeartButton;