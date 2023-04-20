import React from "react";

const Information = () => {
  return (
    <div className="left wow fadeInLeft" data-wow-duration="1s">
      <ul>
        <li className="pb-5">
          <div className="flex gap-6 items-center">
            <div className="icon w-[90px] h-[90px] rounded-full bg-red-300 flex justify-center items-center ">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 8.4666669 8.4666669"
                id="svg8"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs id="defs2" />

                <g id="layer1" transform="translate(0,-288.53332)">
                  <path
                    fill="currentColor"
                    d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z"
                    id="path929"
                    transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"
                  />
                </g>
              </svg>
            </div>
            <div className="short">
              <h3 className="text-[30px] py-2">Address</h3>
              <span className="text-gray-400 ">20, Somewhere in world</span>
            </div>
          </div>
        </li>
        <li className="py-5">
          <div className="flex gap-6 items-center">
            <div className="icon w-[90px] h-[90px] rounded-full bg-green-300 flex justify-center items-center ">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.272 6.365C2 6.9 2 7.6 2 9v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 19 4.6 19 6 19h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.1 22 16.4 22 15V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 5 19.4 5 18 5H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093zM4.647 7h14.706a.5.5 0 0 1 .278.916l-7.075 4.732a1 1 0 0 1-1.112 0L4.369 7.916A.5.5 0 0 1 4.647 7z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="short">
              <h3 className="text-[30px] py-2">Email</h3>
              <span className="text-gray-400 ">
                <a href="#">hello@dizme.com</a>
              </span>
            </div>
          </div>
        </li>
        <li className="py-5">
          <div className="flex gap-6 items-center">
            <div className="icon w-[90px] h-[90px] rounded-full bg-purple-300 flex justify-center items-center ">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="short">
              <h3 className="text-[30px] py-2">Phone</h3>
              <span className="text-gray-400 ">+123 456 7890</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Information;
