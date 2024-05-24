import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';

const PageNotFound = () => {
    return (
        <S.PNFrootContainer>
            <Link to="/">
                <S.PNFLogo>Logo</S.PNFLogo>
            </Link>

            <S.PNFMessageContainer>
                <S.PNFMessageSectionWrapper>
                    <S.PNFElementSpacing>
                        <S.h1>Oops!</S.h1>
                    </S.PNFElementSpacing>
                    <S.PNFElementSpacing>
                        <S.h2>We can't seem to find the page you're looking for.</S.h2>
                    </S.PNFElementSpacing>
                    <S.PNFElementSpacing>
                        <S.h6>Error code: 404</S.h6>
                    </S.PNFElementSpacing>
                    <S.PNFElementSpacing>
                        <Link to="/">
                            <BasicButton>홈으로</BasicButton>
                        </Link>
                    </S.PNFElementSpacing>
                </S.PNFMessageSectionWrapper>

                <S.PNFMessageSectionWrapper>
                    <S.PNFimageWrapper>
                        <img src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" width="313" height="428" alt="Girl has dropped her ice cream."></img>
                    </S.PNFimageWrapper>
                </S.PNFMessageSectionWrapper>
            </S.PNFMessageContainer>
        </S.PNFrootContainer>
    );
};

export default PageNotFound;