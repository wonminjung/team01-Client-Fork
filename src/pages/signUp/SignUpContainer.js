import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

const SignUpContainer = () => {

    const {register, handleSubmit, getValues,
        formState : {isSubmitting, isSubmitted, errors}
    } = useForm({mode: "onChange"})

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    return (
        <S.SignUpWrapper>
            <S.Form onSubmit={handleSubmit((data)=>{
                console.log(data)
            })}>
                <S.Title>회원가입</S.Title>
                {/* 이메일 */}
                <S.Label htmlFor='email'>
                    {/* <S.Minititle>이메일</S.Minititle> */}
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
                    {/* <S.Minititle>비밀번호</S.Minititle> */}
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
                    {/* <S.Minititle>비밀번호 확인</S.Minititle> */}
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

                {/* 이름 */}
                <S.Label>
                    {/* <S.Minititle>이름</S.Minititle> */}
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

                {/* 핸드폰 번호 */}
                <S.Label>
                    {/* <S.Minititle>핸드폰 번호</S.Minititle> */}
                    <S.Input
                        type="number" id="name"
                        placeholder='핸드폰 번호(-없이)'
                        {...register('number', {
                            required : true,
                            
                        })}
                    />
                    {errors?.number?.type === 'required' && (
                        <S.ConfirmMessage>핸드폰 번호를 입력해주세요</S.ConfirmMessage>
                    )}

                </S.Label>

                {/* 생년월일 */}
                <S.Label>
                    {/* <S.Minititle>생년월일</S.Minititle> */}
                    <S.Input
                        type="date" id="birth"
                        {...register('birth', {
                            required : true,
                            
                        })}
                    />
                    {errors?.birth?.type === 'required' && (
                        <S.ConfirmMessage>생년월일 입력해주세요</S.ConfirmMessage>
                    )}

                </S.Label>

                {/* 성별 */}
                {/* <S.Label>

                    <S.Minititle>성별</S.Minititle>
                    <p>여자</p>
                    <S.InputRadio
                        type="radio" id="gender"
                        {...register('birth', {
                            required : true,
                        })}
                    />
                    <p>남자</p><S.InputRadio
                        type="radio" id="gender"
                        {...register('birth', {
                            required : true,
                        })}
                    />
                    {errors?.birth?.type === 'required' && (
                        <S.ConfirmMessage>성별을 선택해주세요</S.ConfirmMessage>
                    )}

                </S.Label> */}

                {/* 약관동의 */}
                <S.Label>
                    

                </S.Label>

                {/* submit 버튼 */}
                <S.Button>회원가입</S.Button>

                {/* 로그인 페이지로 */}
                <Link to='/signIn'><S.Subtitle>이미 회원이신가요?</S.Subtitle></Link>


            </S.Form>
        </S.SignUpWrapper>
    );
};

export default SignUpContainer;