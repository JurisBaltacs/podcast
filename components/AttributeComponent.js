import React from "react";

const AttributeComponent = ({ attributes, isColor, selected, onClick }) => {
  var classNames = require("classnames");

  return (
    <div>
      <div
        onClick={onClick}
        className={classNames(
          "w-8 h-8 border rounded-md mr-3 cursor-pointer flex justify-center items-center border-grey4 text-grey1",
          { "outline outline-grey1": selected, "border-0": selected }
        )}
        style={{ backgroundColor: attributes }}
      >
        {!isColor ? attributes : null}
      </div>
    </div>
  );
};

export default AttributeComponent;
