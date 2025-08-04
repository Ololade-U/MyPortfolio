import { Stack } from "@chakra-ui/react";
import About from "./components/About";
import Landing from "./components/Landing";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ColorModeProvider, useColorMode } from "./components/ui/color-mode";

const App = () => {
  const {colorMode} = useColorMode()
  
  return (
    <>
      <Stack>
        <ColorModeProvider>
        <Landing color={colorMode === 'light' ? 'rgba(103, 105, 109, 1)' : 'white'}/>
        <About/>
        <TechStack color={colorMode === 'dark' ? 'black' : ''}/>
        <Experience/>
        <Contact color={colorMode === 'dark' ? 'white' : ''}/>
        <Footer color={colorMode === 'light' ? 'rgba(103, 105, 109, 1)' : 'white'}/>
        </ColorModeProvider>
      </Stack>
    </>
  );
};

export default App;
