import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Hero from './sections/Hero';
import About from './sections/About';
import Tools from './sections/Tools.js';
import data from './assets/data';
import Sidebar from './sections/Menu/Sidebar';
import ButtonSidebar from './sections/Button/Burger'; 

import { isCompositeComponent } from 'react-dom/test-utils';


function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <header/>
    <ButtonSidebar></ButtonSidebar>
    <Sidebar></Sidebar>
    <main>
      <Hero name={data.hero.name} desc={data.hero.desc} medsos={data.hero.social} resume={data.hero.resume} contact={data.hero.contact}></Hero>
      <About desc={data.about.desc}></About>
      <Tools title={data.tools.title} tech={data.tools.skills}></Tools>
    </main>
    </>
  );
}

export default App;
