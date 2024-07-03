import { Map, fromJS } from "immutable";
import courseReducer, { initialCourseState } from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

import coursesNormalizer from "../schema/courses";

describe("courseReducer tests", function () {
  it("Tests that the default state returns an empty arr", function () {
    const state = courseReducer(undefined, {});

    expect(state).toEqual(Map(initialCourseState));
  });
  it("Tests that FETCH_COURSE_SUCCESS returns the data passed", function () {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",

