import styled from "styled-components";

export const Text = styled.p`
  font-weight: 300;
  font-size: 1.2em;
`;

export const Input = styled.input`
  cursor: pointer;
  font-size: 1.4em;
  margin: 40px 1vw;
  padding: 12px 18px;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  border: none;
  font-family: montserrat;
  border-bottom: 3px solid #999;
  transition: 0.2s;
  background-color: transparent;
  width: 20%;
  text-align: center;
  :active {
    background-color: transparent;
  }
  :focus {
    outline: none;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    background-color: transparent;
  }
  :hover {
    outline: none;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    background-color: transparent;
  }
  ::selection {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const Form = styled.form`
  padding: 1em 0;
`;

export const StyledButton = styled.button`
  background: transparent;
  border-radius: 5px;
  padding: 0.75em 2em;
  margin: 0 15px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  color: black;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.2s;
  border: 3px solid transparent;
  :focus {
    outline: none;
  }

  ${({ theme }) => `
      background-color: ${theme.primary};
      color: ${theme.white};

      :hover {
        background-color: transparent;
        color: ${theme.primary};
        border-color: ${theme.primary};
      }
    `}
`;

export const SelectInput = styled.select`
  max-width: 12ch;
  padding: 0.25em 0.5em;
  border: none;
  font-size: 1.2rem;
  font-family: Montserrat;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.4;
  background-color: transparent;
  margin: 0 auto 0 1em;
`;

export const OptionInput = styled.option`
  background-color: black;
`;
