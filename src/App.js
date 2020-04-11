import React from 'react';
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.content}>
        {/* <Header /> */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
