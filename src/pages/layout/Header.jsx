import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import SearchBox from './SearchBox';

const Header = () => {
    return (
        <S.Header>
            <Link to={"/"}>
                <S.Logo>Logo</S.Logo>
            </Link>
            <SearchBox />
            <UserMenu />
        </S.Header>
    );
};

export default Header;