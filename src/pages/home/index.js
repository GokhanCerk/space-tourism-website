import React from "react";
import Navigation from "../../components/navigation";
import styles from "./index.module.css";

const Home = () => {
  const { main, hero, header, explore, space } = styles;

  return (
    <main className={main}>
      <Navigation />
      <main className={hero}>
        <header className={styles["hero-header"]}>
          <div className={space}>
            <h3 className={styles["header-title"]}>
              So, You Want To Travel To
            </h3>
            <h1 className={header}>Space</h1>
            <p className={styles["hero-description"]}>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className={explore}>
            <a
              className="w-96 h-96 rounded-full bg-slate-200 absolute opacity-0 2xl:hover:opacity-10 transition-all ease-in delay-300
                text-white z-50
            "
              href="#"
            ></a>
            <span className={styles["explore-text"]}>Explore</span>
          </div>
        </header>
      </main>
    </main>
  );
};

export default Home;
