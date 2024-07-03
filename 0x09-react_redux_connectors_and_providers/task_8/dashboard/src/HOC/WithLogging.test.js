import { shallow, mount } from "enzyme";
import React from "react";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("<WithLogging />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("calls console.log on mount and on unmount with Component when the wrapped element is pure html", () => {
    console.log = jest.fn();

    const HOC = WithLogging(() => <p />);

    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);

    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Component is mounted`
    );
 wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Login is going to unmount`
    );

    jest.restoreAllMocks();
  });
});
