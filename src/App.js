import React from "react";
import Navbar from "./components/navbar/Navbar";
import Dummy from "./components/MainContent/Dummy";
import { Container } from "semantic-ui-react";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <main style={{ marginTop: "5rem" }}>
          <Dummy />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
