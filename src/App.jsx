import Header from './components/header/Header';
import Tech from './components/Tech/Tech';
import Projects from './components/Projects/Projects';
import Articles from './components/Article/Article';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    font-family: 'Arial', sans-serif;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
  }
`;

export const App = () => {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Tech />
      <Projects />
      <Articles />
      <Skills />
      <Contact />
      <Footer />
      <p></p>
    </>
  )
}
