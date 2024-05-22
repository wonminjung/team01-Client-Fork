import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './style';

const UserMenu = () => {
    return (
        <S.UserMenu>
            <div><FontAwesomeIcon icon={faBars} /></div>
            <div><FontAwesomeIcon icon={faCircleUser} /></div>
        </S.UserMenu>
    );
};

export default UserMenu;