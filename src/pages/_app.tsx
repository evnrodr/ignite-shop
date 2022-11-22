import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} width={150} height={150} alt="Logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
