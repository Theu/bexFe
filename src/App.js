import React from 'react';
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
