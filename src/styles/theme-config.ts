import { createGlobalStyle, DefaultTheme } from 'styled-components';

export interface Theme extends DefaultTheme {
  gradient: string;
  primary: string;
  secondary: string;
  tertiary: string;
  primaryDark: string;
  secondaryDark: string;
  fontColor: string;
}

export const summerTheme: Theme = {
  gradient: 'linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%);',
  primary: '#C8DEEF',
  secondary: '#FBF0DD',
  tertiary: '#FACF9D',
  primaryDark: '#2E7BA2',
  secondaryDark: '#DF9010',
  fontColor: '#444444',
};

export const borealTheme: Theme = {
  gradient: 'linear-gradient(180deg, #304968 0%, #36C1A0 52.6%, #4650BD 100%);',
  primary: '#C8DEEF',
  secondary: '#FBF0DD',
  tertiary: '#FACF9D',
  primaryDark: '#2E7BA2',
  secondaryDark: '#DF9010',
  fontColor: '#444444',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.gradient};
    color: ${({ theme }) => theme.fontColor};
    height: 100vh;
  }
`;
