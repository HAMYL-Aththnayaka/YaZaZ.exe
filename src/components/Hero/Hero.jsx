import React from "react";
import me from "../../assets/Me.png"

const Hero = () => {
  return (
    <>
      <main className="bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-6xl font-bold">Yasas Aththanayaka</h1>
              <div className="h-[4px] w-[30px] bg-blue-600"></div>
            </div>
            {/**image content section */}
            <div>
                <img src={me} alt='' className="" />
            </div>
          </div>
          {/**Text content section */}
          <div></div>
        </div>
      </main>
    </>
  );
};

export default Hero;