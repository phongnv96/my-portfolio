"use client";

import "./_style.css";

import React, { useEffect, useRef } from "react";

import Button from "@/app/common/components/Button";
import ButtonSwitchTheme from "@/app/common/components/ButtonSwitchTheme";

export default function Header() {
  const el = useRef<any>();
  useEffect(() => {
    const onScroll = (event?: Event) => {
      if (window.pageYOffset > 0) {
        el.current.classList.add("animate");
      } else {
        el.current.classList.remove("animate");
      }
    };
    onScroll();
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      ref={el}
      className="header-basic z-[10] shadow-sm dark:shadow-slate-700 py-5 fixed w-full px-4"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Logo</span>
              <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
            </a>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium md:flex"
          >
            <a className="" href="">
              About
            </a>
            <a className="" href="">
              Blog
            </a>
            <a className="" href="">
              Projects
            </a>
            <a className="" href="">
              Contact
            </a>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <ButtonSwitchTheme />
            <Button type="outlined">Download CV</Button>
          </div>

          <div className="lg:hidden">
            <button
              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
