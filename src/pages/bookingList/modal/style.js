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
    z-index: 1000;
    & .modal {
        background-color: white;
        padding: 30px 50px;
        border-radius: 30px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

        & p {
            color : red;
            line-height: 25px;
            text-align: center;
            margin-bottom: 5px;
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