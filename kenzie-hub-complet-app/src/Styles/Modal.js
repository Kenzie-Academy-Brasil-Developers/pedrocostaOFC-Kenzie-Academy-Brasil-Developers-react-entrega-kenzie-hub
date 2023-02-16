import styled from "styled-components";

export const Modal = styled.div`
  width: 99%;
  height: 99%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;

  background-color: rgba(18, 18, 20, 0.7);

  .modal-global {
    max-width: 320px;
    width: 320px;

    border-radius: var(--radius-03);
    overflow: hidden;
  }

  .modal-title {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--grey-2);

    padding: 25px;
    padding-bottom: 30px;
  }
  .title {
    color: white;
    font-size: 15px;

    height: 25px;
    transform: translate(0, -30px);
  }
  .button-close {
    height: 25px;

    color: white;
    background-color: var(--grey-2);
    border: none;
  }
  .form-content {
    width: 99%;
    padding: 25px;

    display: flex;
    flex-direction: column;

    background-color: var(--grey-3);
  }
  label {
    font-size: var(--font-size-4);

    margin-bottom: 15px;
  }
  input,
  button,
  .select-level {
    height: 45px;
    padding: 15px;

    border-radius: var(--radius-03);
    border: none;
  }
  .input-modal {
    background-color: var(--grey-2);
    border: 2px solid;
    color: white;

    margin-bottom: 25px;
  }
  .input-modal:focus {
    border-color: var(--color-primary);
    outline: 0;
  }
  .select-level {
    margin-bottom: 25px;

    background-color: var(--grey-2);
    color: white;
  }
  .button-send {
    background-color: var(--color-primary);
    color: white;
  }
  .button-send:hover {
    background-color: var(--color-primary-2);
  }
  .error-msg {
    color: var(--negative);

    margin-bottom: 15px;
  }
`;
