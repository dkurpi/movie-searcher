import React from "react";
import styled from "styled-components";

type MessageProps = {
  mainText: string;
  secondText: string;
};

export function Message({ mainText, secondText }: MessageProps) {
  return (
    <MessageWrapper>
      <h1>{mainText}</h1>
      <small>{secondText}</small>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div`
  margin: 15vh 0;
`;
