import { borealTheme } from '@/styles/theme-config';

type CustomTheme = typeof borealTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
