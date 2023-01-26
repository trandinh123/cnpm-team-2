import React from "react";
import Image from "react-bootstrap/Image";

export default function Avatar({
  url = "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
}) {
  return (
    <Image
      roundedCircle
      fluid
      src={url}
      style={{ cursor: "pointer", width: "48px", height: "48px", padding: 0 }}
    />
  );
}
