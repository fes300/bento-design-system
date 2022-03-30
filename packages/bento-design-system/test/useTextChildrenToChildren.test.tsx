import {
  unsafeLocalizedString,
  makeTextChildrenFromElements,
  bold,
  lineBreak,
  useTextChildrenToChildren,
  link,
  TextChildren,
} from "../src";
import { renderHook } from "@testing-library/react-hooks";

const formatMessage = unsafeLocalizedString;

function toChildren(input: TextChildren) {
  const { result } = renderHook(() => {
    const textChildrenToChildren = useTextChildrenToChildren();
    return textChildrenToChildren(input);
  });
  return result.current;
}

describe("textChildrenToChildren", () => {
  test("regular string", () => {
    const input = formatMessage("Hello");
    const result = toChildren(input);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "Hello",
      ]
    `);
  });

  test("lineBreak", () => {
    const input = makeTextChildrenFromElements(lineBreak);
    const result = toChildren(input);
    expect(result).toMatchInlineSnapshot(`
      Array [
        <br />,
      ]
    `);
  });

  test("bold", () => {
    const input = makeTextChildrenFromElements(bold(formatMessage("Bold text")));
    const result = toChildren(input);
    expect(result).toMatchInlineSnapshot(`
      Array [
        <ForwardRef
          as="b"
          fontWeight="bodyStrong"
        >
          Bold text
        </ForwardRef>,
      ]
    `);
  });

  test("link", () => {
    const input = makeTextChildrenFromElements(
      link(formatMessage("Link"), "https://www.google.com", "_blank")
    );
    const result = toChildren(input);
    expect(result).toMatchInlineSnapshot(`
      Array [
        <ForwardRef
          as={
            Object {
              "$$typeof": Symbol(react.forward_ref),
              "render": [Function],
            }
          }
          href="https://www.google.com"
          target="_blank"
        >
          Link
        </ForwardRef>,
      ]
    `);
  });

  test("array of regular strings", () => {
    const input = makeTextChildrenFromElements([formatMessage("Hello"), formatMessage("World")]);
    const result = toChildren(input);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "Hello",
        "World",
      ]
    `);
  });

  test("mixed array of regular strings and bold", () => {
    const input = makeTextChildrenFromElements([
      formatMessage("Hello"),
      bold(formatMessage("World")),
      formatMessage("!"),
    ]);
    const result = toChildren(input);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "Hello",
        <ForwardRef
          as="b"
          fontWeight="bodyStrong"
        >
          World
        </ForwardRef>,
        "!",
      ]
    `);
  });

  test("mixed array with line breaks", () => {
    const input = makeTextChildrenFromElements([
      formatMessage("First"),
      bold(formatMessage("line")),
      lineBreak,
      bold(formatMessage("Second")),
      formatMessage("line"),
      link(formatMessage("Link"), "https://www.google.com", "_blank"),
    ]);
    const result = toChildren(input);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "First",
        <ForwardRef
          as="b"
          fontWeight="bodyStrong"
        >
          line
        </ForwardRef>,
        <br />,
        <ForwardRef
          as="b"
          fontWeight="bodyStrong"
        >
          Second
        </ForwardRef>,
        "line",
        <ForwardRef
          as={
            Object {
              "$$typeof": Symbol(react.forward_ref),
              "render": [Function],
            }
          }
          href="https://www.google.com"
          target="_blank"
        >
          Link
        </ForwardRef>,
      ]
    `);
  });
});
