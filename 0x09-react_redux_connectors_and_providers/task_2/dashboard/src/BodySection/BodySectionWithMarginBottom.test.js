import { shallow, mount } from "enzyme";
import React from "react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";

describe("<BodySectionWithMarginBottom />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();

