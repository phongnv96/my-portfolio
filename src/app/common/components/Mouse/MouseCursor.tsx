"use client"
import './_style.css';

import React, {
  useEffect,
  useRef,
} from 'react';

export default function MouseCursor() {
  const elCursorInner = useRef<any>();
  const elCursorOuter = useRef<any>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (elCursorInner) {
        elCursorInner.current.style.visibility = "visible";
        elCursorInner.current.style.transform = `translate(${event.pageX}px , ${event.pageY - window.pageYOffset}px)`;
        // elCursorInner.current.style.top =  + "px"
      }
      if (elCursorOuter) {
        elCursorOuter.current.style.visibility = "visible";
        elCursorOuter.current.style.transform = `translate(${event.pageX}px , ${event.pageY - window.pageYOffset}px)`;
      }
    };

    const handleMouseOver = () => {
      elCursorInner.current.classList.add("cursor-hover");
      elCursorOuter.current.classList.add("cursor-hover");
    };

    const handleMouseLeave = () => {
      elCursorInner.current.classList.remove("cursor-hover");
      elCursorOuter.current.classList.remove("cursor-hover");
    };

    window.removeEventListener("mousemove", handleMouseMove);
    const aTags = document.querySelectorAll("a");
    const buttonTags = document.querySelectorAll("button");
    aTags.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    buttonTags.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div ref={elCursorOuter} className="mouse-cursor cursor-outer"></div>
      <div ref={elCursorInner} className="mouse-cursor cursor-inner"></div>
    </>
  );
}
