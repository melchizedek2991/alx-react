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


