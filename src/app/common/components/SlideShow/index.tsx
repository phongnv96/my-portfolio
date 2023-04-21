import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { useBreakpoints } from "../../hooks/useBreakPoint";

interface SlideShowProps {
  slides: any[];
}
const SlideShow = (props: SlideShowProps) => {
  const { slides } = props;
  const wrapper = useRef<any>(null);
  const slider = useRef<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const { isLg } = useBreakpoints();

  const [wrapperWidth, setWrapperWidth] = useState<{
    width: number;
    height: number;
  }>({
    width: 500,
    height: 200,
  });

  useEffect(() => {
    setWrapperWidth({
      width: 500,
      height: isLg ? 200 : 400,
    });
    function handleResize() {
      if (wrapper.current !== null) {
        setWrapperWidth({
          width: wrapper.current?.offsetWidth,
          height: wrapper.current?.offsetHeight,
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const next = () => {
    let step = currentStep + 1;
    if (currentStep >= slides.length - 1) {
      step = 0;
    }
    setCurrentStep(step);
    slider.current.style.transform = `translateX(-${
      step * wrapperWidth.width
    }px)`;
  };

  const previous = () => {
    let step = currentStep - 1;
    if (currentStep <= 0) {
      step = slides.length - 1;
    }
    setCurrentStep(step);
    slider.current.style.transform = `translateX(-${
      step * wrapperWidth.width
    }px)`;
  };

  return (
    <>
      <div
        className="flex items-start w-full overflow-hidden relative group/btn"
        ref={wrapper}
      >
        <div
          className="flex flex-nowrap transition-transform ease-in-out duration-500"
          ref={slider}
        >
          {slides.map((item, index) => (
            <div
              style={{ width: `${wrapperWidth?.width}px` }}
              key={`slide-show-${index}`}
            >
              <Image
                width={wrapperWidth?.width}
                src={item}
                height={wrapperWidth?.height}
                alt="slide-show-image"
              />
            </div>
          ))}
        </div>
      </div>
      <a
        className="absolute top-0 left-0 h-full w-[10%] opacity-75 bg-gradient-to-r from-gray-500 to-transparent items-center flex text-center"
        onClick={previous}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="flex-1 rtl:rotate-180 h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </a>
      <a
        className="absolute top-0 right-0 h-full w-[10%] opacity-75 bg-gradient-to-r to-gray-500 from-transparent items-center flex text-center"
        onClick={next}
      >
        <svg
          className="flex-1 h-8 w-8 rtl:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </a>
    </>
  );
};

export default SlideShow;
