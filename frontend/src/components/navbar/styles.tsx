import styled from "styled-components";

export const Navbar = styled.header`
  background-color: #e7664b;
  justify-content: space-between;
  .MuiInputBase-input {
    background: aliceblue;
    margin-right: 0.5em;
    padding: 0.5em;
    border-radius: 2px;
  }
  .MuiToolbar-root {
    margin-left: 8vh;
    @media (max-width: 900px) {
      margin-left: 0;
    }
    @media (max-width: 600px) {
      display: grid;
      .MuiTypography-root {
        width: fit-content;
        margin-left: 30vh;
      }
    }
  }
`;
export const Divbutton = styled.div`
  margin-left: 95vh;
  margin-right: 5vh;
  border-radius: 5px;
  opacity: 0.8;
  transition: 0.3s;

  @media (max-width: 1000px) {
    margin-left: 10vh;
  }
  @media (max-width: 375px) {
    margin-left: 1vh;
  }
  @media (max-width: 420px) {
    margin-left: 1vh;
  }
  .MuiButton-label {
    color: #ffff;
  }

  :hover {
    background-color: aliceblue;
    opacity: 1;
    .MuiButton-label {
      color: black;
    }
  }
`;
