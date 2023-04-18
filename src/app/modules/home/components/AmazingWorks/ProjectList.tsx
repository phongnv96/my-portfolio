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
  },
];
function ProductList() {
  return (
    <div className="py-[100px]">
      {projectPreview.map((item, index) => (
        <ProjectItem {...item} key={`product-preview-${index}`} />
      ))}
    </div>
  );
}

export default ProductList;
