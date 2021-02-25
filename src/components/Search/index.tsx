import React from "react";
import { SeachElements } from "./SearchTypes";
import {
  Input,
  Form,
  StyledButton,
  SelectInput,
  Text,
  OptionInput,
} from "./Search.styles";

export const Search: React.FC & SeachElements = ({
  children,
  ...restProps
}) => (
  <Form
    onSubmit={(e) => e.preventDefault()}
    action=""
    data-testid="search-form"
    {...restProps}
  >
    {children}
  </Form>
);

Search.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);
Search.Select = ({ children, value, onChange, ...restProps }) => (
  <SelectInput
    id="country"
    data-testid="select"
    name="country"
    onChange={onChange}
    value={value}
    {...restProps}
  >
    {children}
  </SelectInput>
);

Search.Option = ({ name, value, ...restProps }) => (
  <OptionInput data-testid="select-option" value={value} {...restProps}>
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
    data-testid="title-input"
    type="text"
    name="title"
    id="title"
    value={value}
    autoComplete="off"
    onChange={onChange}
    {...restProps}
  />
);
