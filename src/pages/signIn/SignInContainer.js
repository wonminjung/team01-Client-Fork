import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import RemoveHeader from '../layout/RemoveHeader';
import S from './style';

const SignInContainer = () => {

    RemoveHeader()

    const {register, handleSubmit, getValues,
        formState : {isSubmitting, isSubmitted, errors}
    } = useForm({mode: "onChange"})

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    return (
        <S.SignInWrapper>
            <S.Form onSubmit={handleSubmit((data)=>{
                console.log(data)
            })}>
                <Link to='/'><S.Title>Logo</S.Title></Link>
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
                <li><S.Subtitle>네이버</S.Subtitle></li>
                <li><S.Subtitle>카카오</S.Subtitle></li>
                <li><S.Subtitle>애플</S.Subtitle></li>
            </S.Ul>

        </S.SignInWrapper>
    );
};

export default SignInContainer;