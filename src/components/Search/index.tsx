import React from "react";
import {
  Input,
  Form,
  StyledButton,
  SelectInput,
  OptionInput,
} from "./Search.styles";

export interface SeachElements {
  Input: React.FC<InputProps>;
  Button: React.FC<ButtonProps>;
  Text: React.FC<TextType>;
  Select: React.FC<SelectType>;
  Option: React.FC<OptionType>;
}

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
type ButtonProps = {
  onClick: () => void;
};

type SelectType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

type OptionType = {
  value: string;
  name: string;
};

type TextType = {
  size?: "small" | "medium" | "large";
};

export const Search: React.FC & SeachElements = ({
  children,
  ...restProps
}) => (
  <Form onSubmit={(e) => e.preventDefault()} action="" {...restProps}>
    {children}
  </Form>
);

Search.Text = ({ children, ...restProps }) => (
  <h1 {...restProps}>{children}</h1>
);
Search.Select = ({ children, value, onChange, ...restProps }) => {
  return (
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
};

Search.Option = ({ name, value, ...restProps }) => {
  return (
    <OptionInput value={value} {...restProps}>
      {name}
    </OptionInput>
  );
};

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
    autoComplete='off'
    onChange={onChange}
    {...restProps}
  />
);
