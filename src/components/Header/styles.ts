import styled from 'styled-components';

export const Header = styled.header`
  height: 128px;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;
