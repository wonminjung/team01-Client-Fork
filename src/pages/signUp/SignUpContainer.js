import React, { useRef, useState } from 'react';
import S from './style';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import RemoveHeader from '../layout/RemoveHeader';
import InfoBox from './InfoBox';
import { useSelector } from 'react-redux';
import ScrollEvent from '../layout/ScrollEvent';

const SignUpContainer = () => {

    RemoveHeader();
    ScrollEvent();

    const currentUser = useSelector((state)=>state.user.currentUser);
    const userStatus = useSelector((state)=>state.user.isLogin);
    // 현재 로그인 상태를 확인하여 아닌 경우
    if(userStatus){
        // replace 왔던 기록을 없애버린다. history
        alert("로그아웃 상태여야 합니다")
        // return <Navigate to={"/signIn"} replace={true}/>
    }
    // console.log(currentUser)

    // 회원가입 완료 시 로그인 페이지로 바로 이동시켜주기 위해
    const navigate = useNavigate();

    const {register, handleSubmit, getValues,
        formState : {isSubmitting, isSubmitted, errors}
    } = useForm({mode: "onChange"})

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
    const phoneRegex = /^01([0|1|6|7|8|9])-[0-9]{4}-[0-9]{4}$/;


    // 주소 input 레퍼런스
    // const addressInputRef = useRef(null);

    // 주소 상태 관리
    const [address, setAddress] = useState('');

    // const currentUser = useSelector((state)=>state.user.currentUser);


    return (
        <S.SignUpWrapper>
            <S.Form onSubmit={handleSubmit(async (data)=>{
                console.log(data)

                //회원가입 로직
                await fetch('http://localhost:8000/user/signUp', {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                        userId : data.userId,
                        name : data.name,
                        email : data.email,
                        password : data.password,
                        address : data.address,
                        phone : data.phone
                    })
                })
                .then((res)=>res.json())
                .then((res)=>{
                    if(res.registerSuccess){
                        alert(res.message)
                    }
                    // 로그인 페이지로 보내기
                    navigate('/signIn')
                })
                .catch(console.error)

            })}>

                <S.LogoImage src="./images/pages/layout/logo.svg" alt="eggbnb"></S.LogoImage>
                
                {/* 유저아이디 */}
                <S.Label>
                    <S.Input
                        type="text" id="userId"
                        placeholder='아이디'
                        {...register('userId', {
                            required : true,
                            
                        })}
                    />
                    {errors?.userId?.type === 'required' && (
                        <S.ConfirmMessage>아이디를 입력해주세요</S.ConfirmMessage>
                    )}

                </S.Label>

                {/* 이름 */}
                <S.Label>
                    <S.Input
                        type="text" id="name"
                        placeholder='이름'
                        {...register('name', {
                            required : true,
                            
                        })}
                    />
                    {errors?.name?.type === 'required' && (
                        <S.ConfirmMessage>이름을 입력해주세요</S.ConfirmMessage>
                    )}

                </S.Label>

                {/* 이메일 */}
                <S.Label htmlFor='email'>
                    <S.Input
                        type="text" id="email" placeholder='이메일 주소'
                        {...register('email', {
                            required : true,
                            pattern : {
                                value : emailRegex
                            }
                        })}
                    />
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
                        type="password" id="password" placeholder='비밀번호(영문 소문자 숫자 특수문자 조합 8자리 이상)'
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
                    {errors?.password?.type === 'pattern' && (
                        <S.ConfirmMessage>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다.</S.ConfirmMessage>
                    )}
                </S.Label>

                {/* 비밀번호 확인 */}
                <S.Label htmlFor="passwordConfirm">
                    <S.Input
                        type="password" id="passwordConfirm"
                        placeholder='비밀번호 확인'
                        {...register("passwordConfirm", {
                            required : true,
                            validate : {
                                matchPassword : (value) => {
                                    const {password} = getValues();
                                    console.log(value, password, value === password)
                                    return value === password;
                                }
                            }
                        })}
                    />
                    {errors?.passwordConfirm && (
                        <S.ConfirmMessage>비밀번호를 확인해주세요</S.ConfirmMessage>
                    )}

                </S.Label>

                 {/* 핸드폰 번호 */}
                 <S.Label>
                    <S.Input
                        type="text" id="phone"
                        placeholder='핸드폰 번호(-포함)'
                        {...register('phone', {
                            required : true,
                            pattern : {
                                value : phoneRegex
                            }
                            
                        })}
                    />
                    {errors?.phone?.type === 'required' && (
                        <S.ConfirmMessage>핸드폰 번호를 입력해주세요</S.ConfirmMessage>
                    )}
                    {errors?.phone?.type === 'pattern' && (
                        <S.ConfirmMessage>핸드폰 양식에 맞게 입력해주세요</S.ConfirmMessage>
                    )}

                </S.Label>

                {/* 주소 */}
                <S.Label>
                    <S.Input
                        type="text" id="address"
                        placeholder='주소' value={address} readOnly
                        {...register('address', {
                            required : false,
                            
                        })}
                        // ref={addressInputRef}
                    />
                    <S.MyPageContainer>
                        <div className='infoWrapper'>
                            <InfoBox setAddress={setAddress} info={currentUser}/>
                        </div>
                    </S.MyPageContainer>
                </S.Label>



                {/* 약관동의 */}
                <S.Label>
                    

                </S.Label>

                {/* submit 버튼 */}
                <S.Button disabled={isSubmitting}>회원가입</S.Button>

                {/* 로그인 페이지로 */}
                <Link to='/signIn'><S.Subtitle>이미 회원이신가요?</S.Subtitle></Link>


            </S.Form>
        </S.SignUpWrapper>
    );
};

export default SignUpContainer;