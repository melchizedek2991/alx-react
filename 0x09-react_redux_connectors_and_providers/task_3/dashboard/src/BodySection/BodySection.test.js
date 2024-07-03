import { shallow, mount } from "enzyme";
import React from "react";
import BodySection from "./BodySection";
import { StyleSheetTestUtils } from "aphrodite";

describe("<BodySection />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("BodySection renders without crashing", () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("BodySection renders without crashing", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>

