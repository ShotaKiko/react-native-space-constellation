import React from "react";
import renderer from "react-test-renderer";

import GetStarted from "../GetStarted";

describe("<GetStarted />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<GetStarted />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<GetStarted />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
