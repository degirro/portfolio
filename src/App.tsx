import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/layout/Layout";
import { useContext } from "react";
import { darkTheme, lightTheme } from "./utils/styles/theme/Theme";
import { ThemeContext } from "./utils/context/ThemeContext";
import { Homepage } from "./pages/Homepage";
import { GlobalStyle } from "./utils/styles/global/GlobalStyle";

function App() {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
