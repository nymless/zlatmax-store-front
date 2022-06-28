import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useProductSelectors } from "./hooks/useProductSelectors";

function App() {
  const selectors = useProductSelectors();

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App__header">
          <Header selectors={selectors} />
        </header>
        <main className="App__main">
          <AppRouter selectors={selectors} />
        </main>
        <footer className="App__footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
