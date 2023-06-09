import { FC, ReactNode } from "react";
import { Container } from "../../common/Container/Container";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface IPageTemplate {
  children?: ReactNode;
}

export const PageTemplate: FC<IPageTemplate> = ({ children }) => (
  <>
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  </>
);
