/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";

const NextSymbol = () => <span css={nextStyle}>▼</span>;

const blink = keyframes`
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
`;

const nextStyle = css`
  animation: 1s linear infinite ${blink};
`;

export default NextSymbol;
