import React from "react";

const AttributeComponent = ({ attributes }) => {
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
                      className="w-8 h-8 border border-grey1 mr-2"
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
                      key={item.value}
                      className="w-8 h-8 border border-grey1 mr-2 flex justify-center items-center"
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
