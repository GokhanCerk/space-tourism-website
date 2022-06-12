import React, { useState } from "react";
import Navigation from "../../components/navigation";
import styles from "./index.module.css";
import { DATA } from "../../data";
import { useLocation } from "react-router-dom";
import TabBtn from "../../components/Tabs.js";

const Destination = () => {
  const { hero, img, container, active, universeImg, tabBtns } = styles;
  const [isActive, setIsActive] = useState("Moon");
  const destinations = DATA.destinations;
  console.log(destinations);

  const tabBtn = destinations.map((destination) => (
    <TabBtn
      name={destination.name}
      isActive={isActive}
      setIsActive={setIsActive}
      active={active}
      key={Math.random()}
    />
  ));

  const universe = destinations.map((destination) => {
    return (
      destination.name === isActive && <img src={destination.images.png} className={img}/>
    );
  });

  return (
    <main className={hero}>
      <Navigation />

      <section className={container}>
        <div className={universeImg}>
            {universe}
        </div>
        <div className={tabBtns}>
          {tabBtn}
        </div>
      </section>
    </main>
  );
};

export default Destination;
