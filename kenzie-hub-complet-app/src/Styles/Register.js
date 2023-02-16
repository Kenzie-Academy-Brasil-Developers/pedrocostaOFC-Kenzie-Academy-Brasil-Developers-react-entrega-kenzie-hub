import styled from "styled-components";

export const StyleDiv = styled.div`
  width: 35%;
  max-width: 423px;
  min-width: 310px;
  margin-top: 28px;

  .title-and-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title-register {
    color: var(--color-primary);
    font-size: var(--font-size-2);
  }
  .register {
    color: white;
    font-size: var(--font-size-3);

    margin-top: 25px;
    margin-bottom: 15px;
  }
  .button-of-back {
    font-size: var(--font-size-5);
    font-weight: 600;
    background-color: var(--grey-2);
    border: none;
    color: white;
    border-radius: var(--radius-03);
    text-decoration: none;

    padding: 4px;
  }
  .button-back:hover {
    background-color: var(--grey-1);
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--grey-3);

    margin-top: 20px;
    padding: 0 22px 0 22px;
  }
  input {
    width: 99%;
    height: 40px;
    margin-bottom: 25px;
    border-radius: var(--radius-03);
    background-color: var(--grey-2);
    color: var(--white);
    border: 2px solid var(--grey-1);
    padding-left: 12px;
    margin-top: 12px;
  }
  input:focus {
    border-color: var(--color-primary);
    outline: 0;
  }
  .button-register {
    width: 99%;
    height: 40px;
    margin-bottom: 25px;

    border-radius: var(--radius-03);
    border: none;
  }
  .button-register:hover {
    background-color: var(--color-primary-2);
  }
  label {
    color: white;
    font-size: var(--font-size-5);
  }
  .subtitle {
    margin-bottom: 12px;

    color: var(--grey-1);
    font-size: var(--font-size-5);
  }
  .register-bio,
  .name-register,
  .email-register,
  .pass-register,
  .pass-register-confirm,
  .contact {
    width: 99%;
  }
  #module-register {
    width: 99%;
    height: 41px;
    margin-bottom: 25px;
    padding-left: 12px;
    background-color: var(--grey-2);
    border: none;
    color: var(--grey-1);
  }
  #module-register:focus {
    outline: none;
  }
  .button-register {
    background-color: var(--color-primary);
    color: white;
  }
  .div-select {
    width: 99%;
  }
  .p-select {
    color: white;
    font-size: var(--font-size-5);
    margin-bottom: 15px;
  }
  .error-msg {
    color: var(--negative);
    font-size: var(--font-size-5);
    text-align: center;
    font-weight: 800;
  }
`;
