import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from "aphrodite";

describe("<CourseList />", () => {
  let listCourses;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });

  describe("CourseList with list of courses", () => {
    beforeEach(() => {
      listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ];

