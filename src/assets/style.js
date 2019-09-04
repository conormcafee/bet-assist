import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #f6f6f6;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.6;
    overflow-x: hidden;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  button {
    appearance: none;
    border: none;
    background: transparent;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }
`;
