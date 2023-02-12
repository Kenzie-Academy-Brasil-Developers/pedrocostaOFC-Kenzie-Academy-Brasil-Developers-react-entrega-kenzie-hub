import styled from "styled-components";

export const HomePageUser = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 90px;
  width: 90%;
  height: 90%;

  div {
    padding: 15px;
    width: 90%;
    text-align: center;
  }

  div > h4 {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--color-white);
  }

  div > p {
    font-weight: 300;
    font-size: 1rem;
    color: var(--color-white);
  }

  @media (min-width: 900px) {
    width: 1200px;
    padding-left: 16px;
    padding-right: 16px;

    margin: 0 auto;
    margin-top: 0px;
  }
`;

export const PrinceSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;

  div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-weight: 800;
    font-size: 1rem;
    color: white;
  }

  ul {
    width: 90%;
    max-height: 500px;
    height: max-content;
    overflow-x: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 15px;
    padding: 12px;
    border-radius: 8px;

    background-color: #212529;
  }

  li {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #121214;

    padding: 13px;
    border-radius: 8px;
  }

  li > h4 {
    color: white;
    font-weight: 700;
    font-size: 0.875rem;
  }

  span {
    gap: 40px;
    display: flex;
    align-items: center;
  }

  span > p {
    color: #868e96;
    font-size: 0.75rem;
    font-weight: 400;
  }

  .btnEdit {
    font-size: 0.625rem;
    width: 50px;
    height: 15px;
  }

  button {
    background: transparent;
    border: none;
    color: white;

    font-size: 1.5625rem;
    width: 10px;
    height: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  button > img {
    width: 99%;
    height: 99%;
  }
`;
