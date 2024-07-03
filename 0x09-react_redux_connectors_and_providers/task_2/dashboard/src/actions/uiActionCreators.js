import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

import "node-fetch";

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const boundLogin = (email, password) => dispatch(login(email, password));

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

