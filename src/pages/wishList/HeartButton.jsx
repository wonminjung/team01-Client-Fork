import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeartButton = ({onRemove}) => {

    const handleRemoveItem = () => {
        if(window.confirm("이 아이템을 위시리스트에서 제거하시겠습니까?")){
            onRemove();
        }
    }

    return (
        <div>
             <div onClick={handleRemoveItem}>
                <FontAwesomeIcon className='heart' icon={faHeart} />
             </div>
        </div>

    );
};
export default HeartButton;