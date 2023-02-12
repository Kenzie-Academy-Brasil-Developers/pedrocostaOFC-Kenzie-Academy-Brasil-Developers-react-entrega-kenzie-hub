import styled from "styled-components";

export const ButtonEnterStyle = styled.button`
  border-radius: 8px;

  width: 235px;
  height: 48px;

  border: 1px solid var(--color-primary);
  background: var(--color-primary);
  color: var(--color-white);
`;

export const ButtonRegisterStyle = styled.a`
  width: 235px;
  height: 48px;
  border-radius: 8px;

  background-color: var(--color-grey-1);
  color: var(--color-white);
  border: 1px solid var(--color-grey-1);

  &:hover {
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
  }
`;

export const ButtonBackStyle = styled.button`
  background: #212529;
  border-radius: 8px;
  border: none;
  width: 67px;
  height: 40px;

  color: var(--color-white);
`;
