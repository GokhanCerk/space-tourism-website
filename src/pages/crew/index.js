import React, { useState } from "react";
import styles from "./index.module.css";
import { DATA } from "../../data";
import Navigation from "../../components/navigation";
import Bullet from "../../components/pagination/bullet";

const Crew = () => {
  const { container, bio, hr } = styles;
  const crews = DATA.crew;
  const { main, pick } = styles;
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

      <h1 className={pick}>
        <span>02</span>Meet Your Crew
      </h1>

      <section className={container}>
        <div className={bio}>
          <div className="2xl:pt-40 pt-0">
            <h1 className="font-bellefair text-2xl hidden 2xl:block">
              {person.role}
            </h1>
            <img src={person.images.png} className="block md:hidden mt-24" />
            
            <h1 className="font-bellefair text-2xl hidden md:block 2xl:hidden">
              {person.role}
            </h1>
            <div className="text-white hidden md:block">
              <p>{person.name}</p>
              <p>{person.bio}</p>
            </div>

            <hr className={hr}/>
            <div className="flex justify-center 2xl:hidden">{paginateBullets}</div>

            <h1 className="font-bellefair text-2xl 2xl:hidden md:hidden">
              {person.role}
            </h1>
            <div className="text-white md:hidden">
              <p>{person.name}</p>
              <p>{person.bio}</p>
            </div>
          </div>

          <div className="2xl:absolute 2xl:bottom-0 2xl:mb-10 hidden 2xl:block">
            {paginateBullets}
          </div> 

          <img src={person.images.png} className="hidden md:block 2xl:hidden" />
        </div>

        <div>
          <img
            src={person.images.png}
            className="2xl:max-w-[514px] 2xl:absolute 2xl:bottom-0 2xl:right-0 hidden 2xl:block"
          />
        </div>
      </section>
    </main>
  );
};

export default Crew;
