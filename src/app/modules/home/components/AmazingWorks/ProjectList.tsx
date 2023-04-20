import ProjectItem from "./ProjectItem";
import { ProjectType } from "../../types";
import React from "react";
const projectPreview: ProjectType[] = [
  {
    image: "/images/product-preview1.jpg",
    title: "Social website Trip Sharing",
    description:
      "After reviewing all properties of the existing systems as well as the travel trend of young people in Viet Nam, we have come to decision to develop a travel sharing system which allows travelers to share their travel experiences by images, articles or blogs. It will make easier for other travelers to prepare their plans. The purpose of the system is creating a travel community to exchange information.",
    subTitle: "WEB DEVELOPMENT",
    sliders: [
      "/images/product-preview1.1.jpg",
      "/images/product-preview1.2.jpg",
      "/images/product-preview1.3.jpg",
      "/images/product-preview1.4.jpg",
    ],
  },
  {
    image: "/images/project-preview1.png",
    title: "MSB Design system",
    subTitle: "WEB DEVELOPMENT",
    description: (
      <>
        <div>
          <section className="markdown">
              Following the MSB Design specification, we developed a React UI
              library <code>antd-msb</code> that contains a set of high quality
              components and demos for building rich, interactive user
              interfaces.
          </section>
          <h2
            id="✨-Features"
            className="dark:text-white text-xl py-3 text-gray-800"
          >
            <span>✨ Features</span>
          </h2>
          <ul className="led leading-5 ">
            <li className="py-1 lg:py-2 truncate">
              🌈 Enterprise-class UI designed for web applications.
            </li>
            <li className="py-1 lg:py-2 truncate">
              📦 A set of high-quality React components out of the box.
            </li>
            <li className="py-1 lg:py-2 truncate">
              🛡 Written in TypeScript with predictable static types.
            </li>
            <li className="py-1 lg:py-2 truncate">
              🎨 Powerful theme customization in every detail.
            </li>
          </ul>
        </div>
      </>
    ),
    sliders: [
      "/images/project-preview1.png",
      "/images/project-preview1.5.png",
      "/images/project-preview1.1.png",
      "/images/project-preview1.2.png",
      "/images/project-preview1.3.png",
      "/images/project-preview1.4.png",
    ],
  },
  {
    image: "/images/project-preview2.1.png",
    title: "MSB Design system for mobile",
    subTitle: "MOBILE DEVELOPMENT",
    description: (
      <>
        <div>
          <h1>MSB Design of Flutter</h1>
          <section className="markdown">
              Another version of MSB Design system for mobile app, we developed
              a Flutter UI library that contains a set of high quality
              components and demos for building rich, interactive user
              interfaces.
          </section>
        </div>
      </>
    ),
    sliders: [
      "/images/project-preview2.1.png",
      "/images/project-preview2.2.png",
      "/images/project-preview2.3.png",
      "/images/project-preview2.4.png",
    ],
  },
];
const ProductList = () => {
  return (
    <div className="py-[30px] lg:py-[100px] divide-y divide-gray-500 lg:divide-y-0">
      {projectPreview.map((item, index) => (
        <div key={`product-preview-${index} `} className="mb-0 py-10 lg:py-0 lg:mb-28">
          <ProjectItem isRevertDisplay={index % 2 === 1} {...item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
