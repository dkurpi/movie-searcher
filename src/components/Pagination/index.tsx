import React from "react";
import styled from "styled-components";
import PaginationInner from "@material-ui/lab/Pagination";

import { makeStyles } from "@material-ui/core/styles";

type PaginationProps = {
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  count: number;
  page: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  onChange,
  count,
  page,
  ...restProps
}) => {
  const classes = useStyles();

  return (
    <PaginationContainer>
      <PaginationInner
        classes={{ ul: classes.ul }}
        count={count}
        page={page}
        onChange={onChange}
        color="secondary"
        {...restProps}
      />
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      margin: "20px 0 50px",
    },
  },
}));
