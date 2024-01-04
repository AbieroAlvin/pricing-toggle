import { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";

import bgBottom from "./assets/images/bg-bottom.svg";
import bgTop from "./assets/images/bg-top.svg";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="font-body  md:h-screen md:mx-auto bg-[--V-L-Grayish-Blue]">
        <img
          src={bgTop}
          alt="/"
          className="absolute top-[0px] right-[0px] z-[10]"
        />
        <img
          src={bgBottom}
          alt="/"
          className="absolute bottom-[0px] left-[0px] z-[10]"
        />
        <div className="relative max-w-6xl z-20 flex flex-col items-center justify-center md:h-screen py-8 mx-auto">
          <h1 className="md:text-4xl text-3xl font-body text-[var(--D-Grayish-Blue)] font-semibold text-center mb-4">
            Our Pricing
          </h1>
          <div className="flex gap-4 items-center mb-12">
            <p className="text-[16px]">Annually</p>
            {!toggle ? (
              <div onClick={handleToggle} className="cursor-pointer">
                <FaToggleOn size={30} />
              </div>
            ) : (
              <div onClick={handleToggle} className="cursor-pointer">
                <FaToggleOff size={30} />
              </div>
            )}
            <p className="text-[16px]">Monthly</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  md:gap-0 gap-6 md:max-h-[550px]">
            <Card1 toggle={toggle} />
            <Card2 toggle={toggle} />
            <Card3 toggle={toggle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
