import { FC, ReactNode, useState } from "react";
import { Container } from "../common/Container/Container";
import { Footer } from "../Layouts/Footer/Footer";
import { Logotype } from "../../assets/icons";

interface IPageTemplate {
  children?: ReactNode;
}

export const PageTemplate: FC<IPageTemplate> = ({ children }) => (
  <>
    <div className="mainLogo">
      <Logotype />
      <div className="logo-title">MovieMania</div>
    </div>
    <Container>
      {children}
      <Footer />
    </Container>
  </>
);
