import React from "react";
import renderer from "react-test-renderer";

import LaunchDetails from "../LaunchDetails";

describe("<LaunchDetails />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<LaunchDetails />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<LaunchDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
