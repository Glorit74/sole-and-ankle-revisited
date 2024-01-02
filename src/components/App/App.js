import React from "react";
import styled from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
import { VIEWPORT } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
  @media (max-width: ${VIEWPORT.tablet}) {
    padding: 48px 32px;
  }

  @media (max-width: ${VIEWPORT.phone}) {
    padding: 48px 12px;
  }
`;

export default App;
