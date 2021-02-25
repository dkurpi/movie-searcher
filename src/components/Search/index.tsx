import React from "react";
import { SeachElements } from "./SearchTypes";
import {
  Input,
  Form,
  StyledButton,
  SelectInput,
  OptionInput,
} from "./Search.styles";

export const Search: React.FC & SeachElements = ({
  children,
  ...restProps
}) => (
  <Form onSubmit={(e) => e.preventDefault()} action="" {...restProps}>
    {children}
  </Form>
);

Search.Text = ({ children, ...restProps }) => (
  <span {...restProps}>{children}</span>
);
Search.Select = ({ children, value, onChange, ...restProps }) => (
  <SelectInput
    id="country"
    name="country"
    onChange={onChange}
    value={value}
    {...restProps}
  >
    {children}
  </SelectInput>
);

Search.Option = ({ name, value, ...restProps }) => (
  <OptionInput value={value} {...restProps}>
    {name}
  </OptionInput>
);

Search.Button = ({ children, onClick, ...restProps }) => (
  <StyledButton onClick={onClick} {...restProps}>
    {children}
  </StyledButton>
);

Search.Input = ({ value, onChange, children, ...restProps }) => (
  <Input
    data-testid="input"
    type="text"
    name="title"
    id="title"
    value={value}
    autoComplete="off"
    onChange={onChange}
    {...restProps}
  />
);
