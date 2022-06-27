import { useState, useEffect } from "react";
import styles from "./index.module.css";

const TabBtn = ({ name, isActive, setIsActive, active }) => {
  const { tabBtn } = styles;
  
  return (
    <span className={tabBtn}>
      <button
        className={`${isActive === name ? active : ""} ${tabBtn}`}
        onClick={() => {
          setIsActive(name)
          localStorage.setItem('currentTab', name)
        }}
      >
        {name}
      </button>
    </span>
  );
};

export default TabBtn;
