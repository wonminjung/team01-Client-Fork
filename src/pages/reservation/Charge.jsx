import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

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
                    src='//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_naver_pay.4e1254eb1a8052c11c88d1ebc4a44382.svg'
                    alt='네이버페이'
                />
                <img
                    src='//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_kakao_pay.c30f6975355cde0b6fb339b5989feb05.svg'
                    alt='카카오페이'
                />
                <img 
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAilBMVEVHcEw/jvcnXO89i/gmW/M3f/YjVfJJo/g5gfRAkfcmW/QhUfUkV/VDl/hFm/g0efVAkfdBlPcjVfIYP+g9i/dEmPgzdfYdSfUaQ/UzdvYfT/U6hPc3f/c1e/dClPgubfZFmvkxcfYiVPY+jvcbRuc8ifcYP+koYfYlW/NMqvkgUOcXPu4safY8iPTlxlkaAAAAF3RSTlMAoZOFycNf/g4oq/bkW7Q88+eEI8zYsvaRjncAAAEdSURBVCiRrdHXcoMwEAVQTDGE4hYnFBWEJUDI5P9/L7sSxJmBl8zk8ni4KivP+5ckxSkO9untJEQ8+fvEuRCTuO1YwCFQlMftZh9SSov1+2bJS98D4pZzdL9HhyJ5GScEFIuxppTVEH/h5EogDoXpWsg8t7lb/0AIBbX41YxrcruopBio4nmaB0TrUWt9tEXKGEPl8TSWDcT+8EgBr2A1fJTIODbPqixLxyGgRMQwKrganlWFCozNiz17h+nJMDhFdnsyNLxA3ymLtpvZa/bU4Txz/YNl44Z8tlWLBrByGK7ji5itdr1SazH/NfngMwrDiAEuvdfklxStUgqpTHceXBuFlG0fHC5lEBt/syQmMqbJbrvkeWnon/flz/kG3Twq9VGdqFsAAAAASUVORK5CYII='
                    alt='토스페이'
                />
            </div>
            <div>
                <button>
                    <div>
                        <div><img src="" alt="" /></div>
                        <div>신용•체크카드</div>
                    </div>
                    <div>
                        <div><img src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_naver_pay.4e1254eb1a8052c11c88d1ebc4a44382.svg" alt="naverPay" /></div>
                        <div>네이버페이</div>
                    </div>
                    <div>
                        <div><img src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_kakao_pay.c30f6975355cde0b6fb339b5989feb05.svg" alt="kakaoPay" /></div>
                        <div>카카오페이</div>
                    </div>
                    <div>
                        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAilBMVEVHcEw/jvcnXO89i/gmW/M3f/YjVfJJo/g5gfRAkfcmW/QhUfUkV/VDl/hFm/g0efVAkfdBlPcjVfIYP+g9i/dEmPgzdfYdSfUaQ/UzdvYfT/U6hPc3f/c1e/dClPgubfZFmvkxcfYiVPY+jvcbRuc8ifcYP+koYfYlW/NMqvkgUOcXPu4safY8iPTlxlkaAAAAF3RSTlMAoZOFycNf/g4oq/bkW7Q88+eEI8zYsvaRjncAAAEdSURBVCiRrdHXcoMwEAVQTDGE4hYnFBWEJUDI5P9/L7sSxJmBl8zk8ni4KivP+5ckxSkO9untJEQ8+fvEuRCTuO1YwCFQlMftZh9SSov1+2bJS98D4pZzdL9HhyJ5GScEFIuxppTVEH/h5EogDoXpWsg8t7lb/0AIBbX41YxrcruopBio4nmaB0TrUWt9tEXKGEPl8TSWDcT+8EgBr2A1fJTIODbPqixLxyGgRMQwKrganlWFCozNiz17h+nJMDhFdnsyNLxA3ymLtpvZa/bU4Txz/YNl44Z8tlWLBrByGK7ji5itdr1SazH/NfngMwrDiAEuvdfklxStUgqpTHceXBuFlG0fHC5lEBt/syQmMqbJbrvkeWnon/flz/kG3Twq9VGdqFsAAAAASUVORK5CYII=" alt="tossPay" /></div>
                        <div>토스페이</div>
                    </div>
                </button>
                <div>
                    <div>
                        <div>
                            <div>카드 번호</div>
                            <FontAwesomeIcon icon={faLock}/>
                        </div>
                        <input />
                    </div>
                    <div className='cardInfo'>
                        <div>
                            <div>만료일</div>
                            <input />
                        </div>
                        <div>
                            <div>CVV</div>
                            <input />
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <S.CategoryBorder />
        </S.CategoryBox>
    );
};

export default Charge