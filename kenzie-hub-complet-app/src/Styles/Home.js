import styled from "styled-components";

export const DivHome = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  .main-technics {
    position: relative;
  }

  .name-to-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey-2);
    padding: 25px 15px 25px 15px;
  }
  .name-profile {
    font-size: var(--font-size-2);
  }
  .description-profile {
    font-size: var(--font-size-4);
    color: var(--grey-1);
  }
  .div-title-tech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 15px 7px 15px;
  }
  .title-tech {
    font-size: var(--font-size-2);
    padding: 15px 1 15px 0;
  }
  .button-technics-add {
    background-color: var(--grey-2);

    border: none;
    padding: 4px;

    color: white;
    font-size: 18px;
    font-weight: 800;
    border-radius: var(--radius-03);
  }
  .button-tech-add:hover {
    background-color: var(--grey-1);
  }
  .ul-technics {
    width: 99%;

    background-color: var(--grey-2);

    padding: 25px;
  }
  .li-technics {
    background-color: #121214;
    border-radius: var(--radius-03);

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 99%;
    height: 45px;

    margin-bottom: 15px;
    padding: 15px;
  }
  .li-technics:hover {
    background-color: var(--grey-3);
  }
  .level-and-delete {
    display: flex;
    justify-content: center;

    gap: 25px;
  }
  .technics {
    font-size: var(--font-size-3);
  }
  .text-level {
    font-size: var(--font-size-4);
    color: var(--grey-1);
  }
  .button-delete {
    border: none;

    background-color: var(--grey-4);
  }
  .button-delete:hover {
    background-color: var(--grey-1);
    border-radius: var(--radius-03);
  }
  @media (max-width: 800px) {
    .div-name-and-description {
      flex-direction: column;
      align-items: flex-start;

      gap: 25px;
    }
  }
`;
