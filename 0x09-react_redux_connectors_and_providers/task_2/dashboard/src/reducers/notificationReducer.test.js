import { Map, fromJS } from "immutable";

import notificationReducer, {
  initialNotificationState,
} from "./notificationReducer";

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

import notificationsNormalizer from "../schema/notifications";

describe("courseReducer tests", function () {
  it("Tests that the default state returns an initial state", function () {
    const state = notificationReducer(undefined, {});

    expect(state).toEqual(Map(initialNotificationState));
  });
  it("Tests that FETCH_NOTIFICATIONS_SUCCESS returns the data passed", function () {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },

