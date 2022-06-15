import React, { useState } from "react";
import styles from "./index.module.css";
import { DATA } from "../../data";
import Navigation from "../../components/navigation";
import Bullet from "../../components/pagination/bullet";

const Crew = () => {
  const crews = DATA.crew;
  const { main } = styles;
  const arrKeys = Object.keys(crews);
  const [selectPerson, setSelectPerson] = useState(parseInt(arrKeys[0]));
  const [person, setPerson] = useState(crews[selectPerson]);

  const paginateBullets = crews.map((crew, key) => (
    <Bullet
      key={Math.random()}
      keys={key}
      crew={crew}
      setPerson={setPerson}
      selected={selectPerson}
      setSelectPerson={setSelectPerson}
    />
  ));

  return (
    <main className={main}>
      <Navigation />
      {paginateBullets}
      <p>{person.role}</p>
      <p>{person.name}</p>
      <p>{person.bio}</p>
      <p>
        <img src={person.images.png} />
      </p>
    </main>
  );
};

export default Crew;
