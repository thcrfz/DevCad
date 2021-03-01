import styled from "styled-components";

export const Navbar = styled.header`
  background-color: #e0301e;
  justify-content: space-between;

  .MuiToolbar-root {
    margin-left: 8vh;
    color: #fff;
    @media (max-width: 900px) {
      margin-left: 0;
    }
    @media (max-width: 600px) {
      .MuiTypography-root {
        margin-left: 0vh;
      }
    }
  }
  .btn-logout {
    margin-left: 150vh;
    color: #fff;
    @media (max-width: 900px) {
      margin-left: 75vh;
    }
    @media (max-width: 500px) {
      margin-left: 25vh;
    }
  }
  .btn-logout:hover {
    background-color: #fff;
    color: #000;
  }
`;
