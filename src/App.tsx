import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useAppInit } from './hooks/useAppInit';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useAppInit();

  return (
    <BrowserRouter>
      <div className="App">
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          <AppRouter />
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
