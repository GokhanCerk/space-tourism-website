import React, { useState } from "react";
import Navigation from "../../components/navigation";
import styles from "./index.module.css";
import { DATA } from "../../data";
import TabBtn from "../../components/Tabs.js";

const Destination = () => {
  const destinations = DATA.destinations;
  const {
    hero,
    img,
    container,
    active,
    universeImg,
    universeDescription,
    tabBtns,
    star,
    desc,
    hr,
    details,
    pick,
    dinfo,
  } = styles;

  const [isActive, setIsActive] = useState(destinations[0].name);
  
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

      <h1 className={pick}>
        <span>01</span>Pick Your Destination
      </h1>

      <section className={container}>
        <div className={universeImg}>{universe}</div>
        <div className={universeDescription}>
          <div className={tabBtns}>{tabBtn}</div>
          <h1 className={star}>{isActive}</h1>
          <p className={desc}>{getDescription("description")}</p>
          <hr className={hr} />
          <div className={details}>
            <div className={dinfo}>
              <h2>AVG. DISTANCE</h2>
              <p>{getDescription("distance")}</p>
            </div>

            <div className={dinfo}>
              <h2>EST. TRAVEL TIME</h2>
              <p>{getDescription("travel")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;
