import React from "react";
import Header from "./components/header/Header";
import TourExplanation from "./components/tourExplanation/TourExplanation";
import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.content}>
        <Header />
        <TourExplanation />
      </div>
    </div>
  );
};

export default App;
