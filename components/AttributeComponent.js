import React, { useState } from "react";

const AttributeComponent = ({ attributes }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  var classNames = require("classnames");

  return (
    <div>
      {attributes.map((attribute) => {
        if (attribute.id === "color") {
          return (
            <div key={attribute.id}>
              <div>Krāsas</div>
              <div className="flex">
                {attribute.items.map((item) => {
                  return (
                    <div
                      key={item.value}
                      style={{ backgroundColor: item.value }}
                      onClick={() => setSelectedColor(item.value)}
                      className={classNames(
                        "w-8 h-8 border border-grey1 mr-3 cursor-pointer outline-offset-1 outline-2",
                        { outline: item.value === selectedColor }
                      )}
                    ></div>
                  );
                })}
              </div>
            </div>
          );
        }
        if (attribute.id === "size") {
          return (
            <div key={attribute.id}>
              <div>Izmēri</div>
              <div className="flex">
                {attribute.items.map((item) => {
                  return (
                    <div
                      onClick={() => setSelectedSize(item.value)}
                      key={item.value}
                      className={classNames(
                        "w-8 h-8 border border-grey1 mr-3 cursor-pointer outline-offset-1 outline-2 flex justify-center items-center",
                        { outline: item.value === selectedSize }
                      )}
                    >
                      {item.value}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default AttributeComponent;
