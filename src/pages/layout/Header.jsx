import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import SearchBox from './SearchBox';

const Header = () => {
    const publicUrl = process.env.PUBLIC_URL;
    return (
        <S.Header>
            <Link to={`/?cate=coolPool&lPrice=0&gPrice=1000000&maxUser=0&bedroom=0&bed=0&bathroom=0`}>
                <S.Logo><img src={`${publicUrl}/images/pages/layout/logo.svg`} alt='eggbnb'/></S.Logo>
            </Link>
            <SearchBox />
            <UserMenu />
        </S.Header>
    );
};

export default Header;