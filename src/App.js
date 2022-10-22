import React, { Fragment } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Tools from './sections/Tools';
import data from './assets/data';
import Header from './sections/Header';
import ScrolltoTop from './sections/ScrollTop/Scrolltop';
import Portfolio from './sections/Portfolio';
import {Element} from "react-scroll";

function App() {
  return (
      <Fragment>
    {/* Header Section */}
    <header>
    <Header></Header>
    </header>
    {/* Body Section */}
    <main>
      <Hero name={data.hero.name} desc={data.hero.desc} medsos={data.hero.social} resume={data.hero.resume} contact={data.hero.contact}></Hero>
      <Element name="section1">
      <About desc={data.about.desc}></About>
      </Element>
      <Tools id="section1" title={data.tools.title} tech={data.tools.skills}></Tools>
      <Portfolio></Portfolio>
    </main>

    {/* ScrollTop Here */}
    <ScrolltoTop/>
    </Fragment>
  );
}

export default App;
