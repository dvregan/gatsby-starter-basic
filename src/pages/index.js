/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import SEO from "../components/SEO";
import Logo from "../components/Logo";

const Container = ({ children }) => (
  <div
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      img: {
        height: "35vmin",
      },
    }}
  >
    {children}
  </div>
);

const Index = () => (
  <Container>
    <SEO />
    <Logo />
    <p>
      Edit <code>src/pages/index.js</code> and save to reload.
    </p>
    <Styled.a
      href="https://gatsbyjs.org/tutorial/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn Gatsby
    </Styled.a>
  </Container>
);

export default Index;
