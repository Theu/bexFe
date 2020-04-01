import React from 'react';
import Header from './components/header/Header';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
    </div>
  );
}

export default App;
