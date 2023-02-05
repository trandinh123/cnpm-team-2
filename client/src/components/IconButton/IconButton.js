import React from "react";

export default function IconButton({
  icon,
  customClass = "",
  onClick = () => {},
}) {
  return (
    <div
      style={{
        cursor: "pointer",
        padding: 0,
      }}
      className={`${customClass} d-flex justify-content-center align-items-center`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
