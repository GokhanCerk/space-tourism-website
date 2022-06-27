import React, { useState } from "react";
import styles from "./index.module.css";
import { DATA } from "../../data";
import Navigation from "../../components/navigation";
import Bullet from "../../components/pagination/bullet";

const Crew = () => {
  const { container, bio, hr } = styles;
  const crews = DATA.crew;
  const { main, pick } = styles;
  const currentBullet = localStorage.getItem("currentBullet");
  const arrKeys = Object.keys(crews);
  const [selectPerson, setSelectPerson] = useState(
    currentBullet === null ? parseInt(arrKeys[0]) : parseInt(currentBullet)
  );
  const [person, setPerson] = useState(
    crews[currentBullet === null ? selectPerson : currentBullet]
  );

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
            <h1 className="font-bellefair text-3xl hidden 2xl:block uppercase opacity-[0.5] text-white mb-4">
              {person.role}
            </h1>
            <img src={person.images.png} className="block md:hidden mt-24" />

            <h1 className="font-bellefair text-2xl hidden md:block 2xl:hidden opacity-[0.5] text-white text-center uppercase">
              {person.role}
            </h1>
            <div className="text-white hidden md:block">
              <h1 className="uppercase 2xl:text-5xl md:text-4xl md:text-center 2xl:text-left md:pt-2 font-bellefair mb-7">
                {person.name}
              </h1>
              <p className="text-solid-blue text-[18px] text-center 2xl:text-left">{person.bio}</p>
            </div>

            <hr className={hr} />
            <div className="flex justify-center 2xl:hidden ">
              {paginateBullets}
            </div>

            <h1 className="font-bellefair mt-8 text-base 2xl:hidden md:hidden text-white text-center uppercase opacity-[0.5]">
              {person.role}
            </h1>
            <div className="text-white md:hidden">
              <h1 className="uppercase text-2xl font-bellefair text-center mt-2 mb-4">
                {person.name}
              </h1>
              <p className="text-solid-blue text-base text-[15px] text-center">{person.bio}</p>
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
