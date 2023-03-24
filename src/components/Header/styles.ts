import styled from 'styled-components';

export const Header = styled.header`
  height: 128px;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryDark};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (min-width: 768px) {
    height: 200px;
    flex-direction: column;
    justify-content: center;

    font-size: 20px;

    .menu {
      display: none;
    }
  }
`;

export const Menu = styled.nav`
  color: #fff;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    ul {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      margin-top: 3rem;
    }
  }
`;
