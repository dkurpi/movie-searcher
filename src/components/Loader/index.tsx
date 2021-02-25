import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

export function Loader() {
  return (
    <LoaderWrapper>
      <CircularProgress color="secondary" size="100px" />
    </LoaderWrapper>
  );
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
`;
