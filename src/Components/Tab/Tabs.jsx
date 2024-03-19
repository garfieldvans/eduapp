import React, { useState } from "react";

export default ({ children }) => {
  const [selected, setSelected] = useState(0);

  const buttons = children.map((child, index) => (
    <button
      key={index}
      className={`tab ${selected === index ? "selected" : ""}`}
      onClick={() => setSelected(index)}
    >
      {child.props.title}
    </button>
  ));

  const content = (
    <div className="container-tab">{children[selected].props.children}</div>
  );

  return [buttons, content];
};
