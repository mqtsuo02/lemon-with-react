/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/core";
import StreamMessage from "./StreamMessage";
import NextSymbol from "./NextSymbol";

const MessageBox = ({ messages }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isStreamFinished, setIsStreamFinished] = useState(false);

  const handleFinish = () => {
    setIsStreamFinished(true);
  };

  const handleClick = () => {
    if (!isStreamFinished) {
      setIsStreamFinished(true);
      return;
    }
    if (messages.length > messageIndex + 1) {
      setIsStreamFinished(false);
      setMessageIndex(messageIndex + 1);
      return;
    }
    console.log("the end");
  };

  return (
    <div>
      <div css={boxStyle} onClick={handleClick}>
        <StreamMessage
          message={messages[messageIndex]}
          isStreamFinished={isStreamFinished}
          onFinish={handleFinish}
        />
        {isStreamFinished && <NextSymbol />}
      </div>
    </div>
  );
};

const boxStyle = css`
  color: white;
  background-color: black;
  cursor: pointer;
`;

export default MessageBox;
