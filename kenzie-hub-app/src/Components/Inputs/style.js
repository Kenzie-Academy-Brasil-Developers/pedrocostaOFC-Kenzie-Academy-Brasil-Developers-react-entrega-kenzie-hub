import styled from "styled-components";

export const InputType = styled.input`
  width: 235px;
  height: 48px;

  background: var(--color-grey-2);
  border: 1.2182px solid var(--color-grey-1);
  border-radius: 4px;

  &::placeholder {
    color: var(--color-grey-1);
    padding: 5px;
    font-size: 10px;
  }

  &:focus {
    border: 1px solid var(--color-white);
  }
`;
export const InputTypeSelect = styled.select`
  width: 235px;
  height: 48px;

  background: var(--color-grey-2);
  border: 1.2182px solid var(--color-grey-1);
  border-radius: 4px;

  color: var(--color-grey-1);

  &:focus {
    border: 1px solid var(--color-white);
  }
`;

export const OptionSelect = styled.option`
  color: var(--color-white);
`;

export const LabelInput = styled.label`
  position: relative;
  top: 1px;
  left: 1px;
  font-weight: 600;
  font-size: 0.75rem;
  color: var(--color-white);
`;
