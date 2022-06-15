import React from "react";

const Bullet = ({ keys, selected, crew, setPerson, setSelectPerson }) => {
  return (
    <button
      className={`${keys === selected ? 'bg-white' : 'bg-gray-600'} rounded-full w-5 h-5 m-2`}
      onClick={() => {
        setPerson(crew);
        setSelectPerson(keys);
      }}
    ></button>
  );
};

export default Bullet;
