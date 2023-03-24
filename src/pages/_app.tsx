import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { summerTheme } from "@/styles/theme-config";
import { GlobalStyles } from "@/styles/theme-config";

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={summerTheme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
}
