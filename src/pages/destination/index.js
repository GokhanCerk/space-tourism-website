import React, { useState } from "react";
import Navigation from "../../components/navigation";
import styles from "./index.module.css";
import { DATA } from "../../data";
import TabBtn from "../../components/Tabs.js";

const Destination = () => {
  const {
    hero,
    img,
    container,
    active,
    universeImg,
    universeDescription,
    tabBtns,
    star,
  } = styles;
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
      destination.name === isActive && (
        <img src={destination.images.png} className={img} />
      )
    );
  });

  const getDescription = (key) => {
    return destinations.map((destination) => {
      return destination.name === isActive && destination[key];
    });
  };

  return (
    <main className={hero}>
      <Navigation />

      <section className={container}>
        <div className={universeImg}>{universe}</div>
        <div className={universeDescription}>
          <div className={tabBtns}>{tabBtn}</div>
          <h1 className={star}>{isActive}</h1>
          <p>{getDescription("description")}</p>
          <p>{getDescription("distance")}</p>
          <p>{getDescription("travel")}</p>
        </div>
      </section>
    </main>
  );
};

export default Destination;
