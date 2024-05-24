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
                        <S.PNFimage src="./images/pages/error/404-image.gif"/>
                    </S.PNFimageWrapper>
                </S.PNFMessageSectionWrapper>
            </S.PNFMessageContainer>
        </S.PNFrootContainer>
    );
};

export default PageNotFound;