import styled from 'styled-components';

export const Header = styled.header`
  height: 128px;
  min-width: 360px;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryDark};
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (min-width: 768px) {
    height: 200px;
    flex-direction: column;
    justify-content: center;

    .menu {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    height: 128px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 150px;
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
  }

  @media (min-width: 1440px) {
    align-items: center;
  }
`;

export const Ul = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 3rem;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
    justify-content: flex-end;
    gap: 3rem;
  }
`;
