import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import RemoveHeader from '../layout/RemoveHeader';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const SignInContainer = () => {

    RemoveHeader()

    const {register, handleSubmit, getValues,
        formState : {isSubmitting, isSubmitted, errors}
    } = useForm({mode: "onChange"})

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    // redux 는 따로 사용하지 않는 것? 
    /*
        const dispatch = useDispatch();
        const currentUser = useSelector((state)=>state.user.currentUser);
        const userStatus = useSelector((state)=>state.user.isLogin);

        // 로그인 상태일 때, (true)
        if(userStatus){
            return (
                <div>{currentUser.name}님 환영합니다.</div>
                <button>메인페이지<button>
            )
        }
    */
    
    return (
        <S.SignInWrapper>
            <S.Form onSubmit={handleSubmit(async (data)=>{
                console.log(data)

                // 로그인 로직
                await fetch('http://localhost:3000/user/signIn', {
                    method : 'POST', 
                    headers : {
                        'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify({
                        email : data.email,
                        password : data.password
                    })
                })
                .then((res)=>res.json())
                .then((res)=>{
                    // 데이터를 들고 있는 res
                    console.log(res)
                    /*
                        redux 이용 시 
                        dispatch(setUser(res.user))
                        dispatch(setUserStatus(true))
                    */
                })
                


            })}>
                <Link to='/'><S.LogoImage src="./images/pages/layout/logo.svg" alt="eggbnb"></S.LogoImage></Link>
                {/* 이메일 */}
                <S.Label htmlFor='email'>
                    {/* <S.InputWrapper> */}
                        {/* <FontAwesomeIcon icon={faEnvelope} className='icon'/> */}
                        <S.Input
                            type="text" id="email" placeholder='이메일 주소'
                            {...register('email', {
                                required : true,
                                pattern : {
                                    value : emailRegex
                                }
                            })}    
                        />

                    {/* </S.InputWrapper>                     */}
                    {errors?.email?.type === 'required' && (
                        <S.ConfirmMessage>이메일을 입력해주세요</S.ConfirmMessage>
                        )}
                    {errors?.email?.type === 'pattern' && (
                        <S.ConfirmMessage>이메일 양식에 맞게 입력해주세요</S.ConfirmMessage>
                        )}
                </S.Label>

                {/* 비밀번호 */}
                <S.Label htmlFor='password'>
                    <S.Input
                        type="password" id="password" placeholder='비밀번호'
                        {...register('password', {
                            required : true,
                            pattern : {
                                value : passwordRegex
                            }
                        })}
                    />
                    {errors?.password?.type === 'required' && (
                        <S.ConfirmMessage>비밀번호를 입력해주세요</S.ConfirmMessage>
                    )}
                </S.Label>

                {/* submit 버튼 */}
                <S.Button>로그인</S.Button>
                <Link to='/signUp'><S.Subtitle>저희 페이지가 처음이신가요?</S.Subtitle></Link>

            </S.Form>

            {/* 네이버, 카카오, 애플 버튼 */}
            <S.Ul>
                <li><S.Subtitle><S.IconImage src="./images/pages/signIn/naverIcon.png" alt="naverIcon"/></S.Subtitle></li>
                <li><S.Subtitle><S.IconImage src="./images/pages/signIn/kakaoIcon.png" alt="kakaoIcon"/></S.Subtitle></li>
                <li><S.Subtitle><S.IconImage src="./images/pages/signIn/appleIcon.png" alt="appleIcon"/></S.Subtitle></li>
            </S.Ul>

        </S.SignInWrapper>
    );
};

export default SignInContainer;