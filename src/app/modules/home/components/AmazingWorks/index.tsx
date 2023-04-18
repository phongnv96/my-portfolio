import Image from "next/image";
import ProductList from "./ProjectList";
import React from "react";

function AmazingWorks() {
  return (
    <div className="mt-[185px] relative">
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
          <span className="text-[22px] text-primary font-bold mb-2">
            Portfolio
          </span>
          <h3 className="text-[40px]">My Amazing Works</h3>
        </div>
        <div className="text mb-9 text-gray-500">
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>
      </div>
      <ProductList />
    </div>
  );
}

export default AmazingWorks;
