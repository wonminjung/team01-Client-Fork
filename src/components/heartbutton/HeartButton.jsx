import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style';


const HeartButton = () => {
    return (
        <div>
             <S.HeartBtn >
                <FontAwesomeIcon className='heart' icon={faHeart} />
             </S.HeartBtn>
        </div>

    );
};
export default HeartButton;