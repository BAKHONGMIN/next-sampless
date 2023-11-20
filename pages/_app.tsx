// _app은 페이지 초기화를 위해 사용할수 있습니다. 커스텀 App이라고 불리는 것으로,
// 모든 페이지에 공통된 처리를 페이지 초기화 시 추가한다고 생각하면 된다.
// 글로벌 css 추가, 페이지 이동시 레이아웃 유지등을 위해 사용한다.

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // styled-components에서 테마를 사용하기 위해 ThemeProvider를 둔다.
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
