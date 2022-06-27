import React from "react";

const Bullet = ({ keys, selected, crew, setPerson, setSelectPerson }) => {

  const setOnClick = () => {
    setPerson(crew);
    setSelectPerson(keys);
    localStorage.setItem('currentBullet', keys)
  }

  return (
    <button
      className={`${keys === selected ? 'bg-white' : 'bg-gray-600'} rounded-full w-5 h-5 m-2`}
      onClick={setOnClick}
    ></button>
  );
};

export default Bullet;
