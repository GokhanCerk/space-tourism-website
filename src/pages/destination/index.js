import React from "react";
import Navigation from "../../components/navigation";
import styles from "./index.module.css";

const Destination = () => {
  const { hero } = styles;

  return (
    <>
     
      <main className={hero}>
      <Navigation />
          hero
      </main>

    </>
  );
};

export default Destination;
