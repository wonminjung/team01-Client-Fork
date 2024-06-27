import { createAction, handleActions } from "redux-actions";

// 타입 생성
const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL";
const SET_USER = "user/SET_USER";
const SET_USER_STATUS = "user/SET_USER_STATUS";

// 초기값 설정
const userInitialValue = {
    currentUser : {},
    isLogin : false,
    previousUrl : "",
}

// 액션 생성, 타입 들어올 시 초기값 설정
export const setPreviousUrl = createAction(SET_PREVIOUS_URL,(previousUrl)=>previousUrl)
export const setUser = createAction(SET_USER, (currentUser)=>currentUser);
export const setUserStatus = createAction(SET_USER_STATUS, (isLogin)=>isLogin);

// Reducer 생성 , 타입의 분리
const user = handleActions({
    [SET_PREVIOUS_URL] : (state = userInitialValue, action) => ({...state, previousUrl : action.payload}),
    [SET_USER] : (state = userInitialValue, action) => ({...state, currentUser : action.payload}),
    [SET_USER_STATUS] : (state = userInitialValue, action) => ({...state, isLogin : action.payload})
}, userInitialValue)

export default user;