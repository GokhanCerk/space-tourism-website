import React from "react";
import Navigation from "../../components/navigation";
import styles from './index.module.css';

const Technology = () => {
  const { main } = styles;

  return (
    <main className={main}>
      <Navigation />
      <p>technology</p>
    </main>
  );
};

export default Technology;
