import {
    tableData
} from "./../../config/constants";


export const GET_USER = 'GET_USER';
export const GET_USER_FINISHED = 'GET_USER_FINISHED';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const GET_USER_DETAIL = 'GET_USER_DETAIL';
export const GET_USER_DETAIL_FINISHED = 'GET_USER_DETAIL_FINISHED';
export const GET_USER_DETAIL_ERROR = 'GET_USER_DETAIL_ERROR';


function startGetUserDetail() {
    return {
        type: GET_USER_DETAIL
    }
}

function finishedGetUserDetail(user) {
    return {
        type: GET_USER_DETAIL_FINISHED,
        payload: user
    }
}


export function getUserDetailById(id) {
    return dispatch => {
        dispatch(startGetUserDetail());
        const data = tableData.find((user) => user.id == id);
        dispatch(finishedGetUserDetail(data))
    }
}


function startGettingUsers() {
    return {
        type: GET_USER
    }
}

function finishedGetUsers(user) {
    return {
        type: GET_USER_FINISHED,
        payload: user
    }
}


export function getUsers() {
    return dispatch => {
        dispatch(startGettingUsers());
        dispatch(finishedGetUsers(tableData))
    }
}