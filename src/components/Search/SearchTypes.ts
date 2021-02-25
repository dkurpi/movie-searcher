export interface SeachElements {
  Input: React.FC<InputProps>;
  Button: React.FC<ButtonProps>;
  Text: React.FC;
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
