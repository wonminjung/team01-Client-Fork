import styled from 'styled-components';

const S = {};

S.ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    & .modal {
        background-color: white;
        padding: 23px;
        border-radius: 30px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        & p {
            margin-bottom: 15px;
            font-size: medium;

        }
        & .modal-buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
        }
        & .okButton {
            cursor: pointer;
            padding: 8px 8px;
            border: none;
            border-radius: 3px;
            background-color: white;
            color: black;

            &:hover {
                transition: 0.3s; // hover되면 0.3초동안 커짐
                transform: scale(1.3);
            }
        }
    }
`;

export default S;