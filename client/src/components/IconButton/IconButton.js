import React from "react";

export default function IconButton({
  color = "white",
  size = "30px",
  icon,
  customStyle,
  customClass = "",
}) {
  return (
    <div
      style={{
        cursor: "pointer",
        color: `${color}`,
        fontSize: `${size}`,
        ...customStyle,
      }}
      className={`${customClass} p-1 d-flex justify-content-center align-items-center`}
    >
      {icon}
    </div>
  );
}
