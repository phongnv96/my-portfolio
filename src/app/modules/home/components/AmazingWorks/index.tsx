import Image from "next/image";
import ProductList from "./ProjectList";
import React from "react";

const AmazingWorks = () => {
  return (
    <div className="container mx-auto " id="portfolio">
      <div className="mt-[80px] lg:mt-[185px] relative">
        <div className="absolute top-0 left-0">
          <Image
            width={130}
            height={165}
            alt="side-effect-1"
            src="/images/side-effect3.png"
          />
        </div>
        <div className="text-center max-w-[550px] m-auto">
          <div className="title mb-6">
            <span className="text-[20px] lg:text-[22px] text-primary font-bold mb-2">
              Portfolio
            </span>
            <h3 className="text-[30px] lg:text-[40px]">My Amazing Works</h3>
          </div>
          <div className="text lg:mb-9 dark:text-gray-400 text-gray-600">
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default AmazingWorks;
