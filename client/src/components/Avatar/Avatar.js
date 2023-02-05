import React from "react";
import Image from "react-bootstrap/Image";

export default function Avatar({
  src = "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  width = "48px",
  height = "48px",
}) {
  return (
    <Image
      roundedCircle
      fluid
      src={src}
      style={{ cursor: "pointer", width, height, padding: 0 }}
    />
  );
}
