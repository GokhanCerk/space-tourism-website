import React from "react";
import Navigation from "../../components/navigation";
import styles from "./index.module.css";
import { DATA } from "../../data";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Destination = () => {
  const { hero, img } = styles;
  const destinations = DATA.destinations;
  console.log(destinations);

  let location = useLocation();
  console.log(location.hash);

  return (
    <>
      <main className={hero}>
        <Navigation />

        {destinations.map((destination) => {
          return (
            <>
              {location.hash === "" && (
                <div className="flex justify-center">
                  {destination.name === "Moon" && (
                    <img src={destination.images.png} className={img} />
                  )}
                </div>
              )}

              {location.hash.replace("#", "") === destination.name && (
                <div className="flex justify-center">
                  <img src={destination.images.png} className={img} />
                </div>
              )}
            </>
          );
        })}

        <div className="flex justify-around font-barlowcondensed text-sm tracking-[2.36px] uppercase mt-6 mb-5">
          {destinations.map((destination) => (
            <NavLink
              to={`#` + destination.name}
              className={`text-white inline-block ${
                location.hash.replace("#", "") === destination.name &&
                " border-b-4"
              }
                ${
                  location.hash === "" &&
                  destination.name === "Moon" &&
                  " border-b-4"
                }
                `}
            >
              {destination.name}
            </NavLink>
          ))}
        </div>

        <div className="text-white flex flex-col items-center">
          {destinations.map((destination) => {
            return (
              <>
                {location.hash === "" && destination.name === "Moon" && (
                  <>
                    <h1 className="uppercase font-bellefair text-5xl">
                      {destination.name}
                    </h1>
                    <p className="p-5 text-center font-barlow text-[15px] leading-6 text-solid-blue mb-8">
                      {destination.description}
                    </p>
                  </>
                )}

                {location.hash.replace("#", "") === destination.name && (
                  <>
                    <h1 className="uppercase font-bellefair text-5xl">
                      {destination.name}
                    </h1>
                    <p className="p-5 text-center font-barlow text-[15px] leading-6 text-solid-blue mb-8">
                      {destination.description}
                    </p>
                  </>
                )}
              </>
            );
          })}
        </div>
        <div className="mx-auto border border-dark-grey w-4/5 mb-8"></div>

        <div className="flex flex-col text-white items-center">
          {destinations.map((destination) => {
            return (
              <>
                {location.hash === "" && destination.name === "Moon" && (
                  <>
                    <h1 className="uppercase mb-3 font-barlowcondensed leading-[2.36px] text-sm text-solid-blue">AVG. DISTANCE</h1>
                    <p className="uppercase mb-8 font-bellefair text-2xl ">{destination.distance}</p>

                    <h1 className="uppercase mb-3 text-solid-blue leading-[2.36px] text-sm font-barlowcondensed">Est. travel time</h1>
                    <p className="uppercase font-bellefair text-2xl">{destination.travel}</p>
                  </>
                )}

                {location.hash.replace("#", "") === destination.name && (
                  <>
                    <h1 className="uppercase mb-3 font-barlowcondensed leading-[2.36px] text-sm text-solid-blue">AVG. DISTANCE</h1>
                    <p className="uppercase mb-8 font-bellefair text-2xl">{destination.distance}</p>

                    <h1 className="uppercase mb-3 text-solid-blue leading-[2.36px] text-sm font-barlowcondensed">Est. travel time</h1>
                    <p className="uppercase font-bellefair text-2xl">{destination.travel}</p>
                  </>
                )}
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Destination;
