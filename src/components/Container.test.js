import React from "react";
import { render } from "../utils/test";
import "@testing-library/jest-dom/extend-expect";
import Container from "./Container";

describe("Container", () => {
  it("no props", () => {
    const { getByText } = render(<Container>Hello World</Container>);
    const node = getByText("Hello World");

    expect(node.tagName).toBe("DIV");
  });

  it("with margin", () => {
    const { getByText } = render(
      <Container margin="1 4">Hello World</Container>
    );
    const node = getByText("Hello World");

    expect(node).toHaveStyle(`
      margin: 4px 16px;
    `);
  });

  it("with padding", () => {
    const { getByText } = render(
      <Container padding="1 2 3 4">Hello World</Container>
    );
    const node = getByText("Hello World");

    expect(node).toHaveStyle(`
      padding: 4px 8px 12px 16px;
    `);
  });

  it("with width", () => {
    const { getByText } = render(<Container width="15">Hello World</Container>);
    const node = getByText("Hello World");

    expect(node).toHaveStyle(`
      width: 80px;
    `);
  });

  it("with height", () => {
    const { getByText } = render(
      <Container height="14">Hello World</Container>
    );
    const node = getByText("Hello World");

    expect(node).toHaveStyle(`
      height: 72px;
    `);
  });

  it("with background color", () => {
    const { getByText } = render(
      <Container bg="secondary.lightBlue.t30">Hello World</Container>
    );
    const node = getByText("Hello World");

    expect(node).toHaveStyle(`
      background-color: #d0e9ff;
    `);
  });
});
