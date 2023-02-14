import React from "react";

export default function LoadingPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "white",
        opacity: ".7",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <div class="spinner-grow text-info" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  );
}
