import React from 'react';
import S from './style';

const Charge = () => {
    return (
        <S.CategoryBox>
            <h3>
                결제 수단
            </h3>
            <div>
                <img 
                    src='//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg'
                    alt='비자카드'
                />
                <img 
                    src='//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg'
                    alt='마스터카드'
                />
                <img 
                    src='//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg'
                    alt='아메리칸익스프레스 카드'
                />
                <img
                    src='//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_naver_pay.4e1254eb1a8052c11c88d1ebc4a44382.svg'
                    alt='네이버페이'
                />
                <img
                    src='//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_kakao_pay.c30f6975355cde0b6fb339b5989feb05.svg'
                    alt='카카오페이'
                />
            </div>
            <S.CategoryBorder />
        </S.CategoryBox>
    );
};

export default Charge