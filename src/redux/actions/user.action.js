import { createAction } from "@reduxjs/toolkit";
import { REQUEST, USER_ACTION } from "../contants";

export const loginAction = createAction(REQUEST(USER_ACTION.LOGIN));
export const registerAction = createAction(REQUEST(USER_ACTION.REGISTER));
export const logoutAction = createAction(REQUEST(USER_ACTION.LOGOUT));
export const getUserInfoAction = createAction(
  REQUEST(USER_ACTION.GET_USER_INFO)
);
