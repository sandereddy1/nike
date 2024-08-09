import { arrowRight } from "../assets/icons";
import { useState } from "react";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full xl:pt-28 pt-16">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl xl:text-8xl max-sm:text-4xl max-sm:leading-tight font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-sm:text-base">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16 xl:gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center xl:w-auto w-1/2">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen xl:py-40 py-20 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          className="object-contain xl:w-[610px] xl:h-[500px] max-w-full w-auto" // Ensure it retains original size on larger screens
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] xl:flex-nowrap flex-wrap justify-center">
          {shoes.map((shoe) => (
            <div key={shoe} className="w-20 sm:w-24 xl:w-auto"> {/* Ensure shoes are sized appropriately */}
              <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
