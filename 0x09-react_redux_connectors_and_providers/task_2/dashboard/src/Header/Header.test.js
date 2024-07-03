import { shallow, mount } from "enzyme";
import React from "react";
import { Header } from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

const USER = { email: "larry@hudson.com", password: "123456" };

describe("<Header />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components render img", () => {
    const wrapper = shallow(<Header user={USER} />);
    wrapper.update();
    expect(wrapper.find("div img")).toHaveLength(1);
  });
  it("Verify that the components render h1", () => {
    const wrapper = shallow(<Header user={USER} />);
    wrapper.update();
    expect(wrapper.find("div h1")).toHaveLength(1);
  });


