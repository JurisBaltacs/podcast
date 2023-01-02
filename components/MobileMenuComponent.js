import React from "react";
import Link from "next/link";

const MobileMenuComponent = ({ categories, onClick }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <div
          className="font-bold text-grey1 m-1 hover:text-orange1"
          key={index}
        >
          <Link href={category.path} className="m-4" onClick={onClick}>
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobileMenuComponent;
