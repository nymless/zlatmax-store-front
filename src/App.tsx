import React, { useEffect } from 'react';
import styles from './App.module.css';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useAppInit } from './hooks/useAppInit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FullScreenLoader from './shared/FullScreenLoader/FullScreenLoader';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const { appInitialized } = useAppInit();

  if (!appInitialized) {
    return <FullScreenLoader />;
  }

  return (
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
      <ToastContainer />
    </div>
  );
}

export default App;
