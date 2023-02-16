import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--grey-3);
  width: 35%;
  max-width: 400px;
  min-width: 300px;

  margin-top: 20px;
  padding: 0 25px 0 25px;

  .login {
    margin-top: 35px;
    margin-bottom: 25px;

    color: white;
    font-size: var(--font-size-3);
  }
  .login-email {
    width: 99%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: none;
  }
  .pass {
    width: 99%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: none;
  }
  input {
    width: 99%;
    height: 43px;

    background-color: var(--grey-2);
    border-radius: var(--radius-03);
    border: 2px solid var(--grey-1);
    color: var(--white);

    margin-bottom: 20px;
    padding-left: 10px;
  }
  input:focus {
    border-color: var(--color-primary);
    outline: 0;
  }
  button {
    width: 100%;
    height: 40px;

    border-radius: var(--radius-03);
    border: none;

    margin-bottom: 25px;
  }
  .button-register {
    width: 100%;
    height: 40px;

    margin-bottom: 20px;

    border-radius: var(--radius-03);
    background-color: var(--grey-1);
    font-size: var(--font-size-4);
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .button-register:hover {
    background-color: var(--grey-2);
  }
  label {
    color: white;
    font-size: var(--font-size-5);

    margin-bottom: 15px;
  }
  .advice {
    color: var(--grey-1);
    font-size: var(--font-size-5);

    margin-bottom: 15px;
  }
  .error-msg {
    width: 100%;

    color: var(--negative);
    font-size: var(--font-size-5);
    text-align: center;
    font-weight: 600;

    margin-bottom: 15px;
  }
`;
