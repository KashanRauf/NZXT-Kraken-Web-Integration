import { createGlobalStyle } from "styled-components";

import { DualMonitor } from "components/DualMonitor";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Staatliches";
    font-weight: 400;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%
  }
`

function App() {
    const inKraken = window.location.search.includes("kraken=1");

    return (
        <>
            {inKraken ? <DualMonitor /> : <h1>Hehehe</h1>}
            <GlobalStyles />
        </>
    );
}

export default App;
