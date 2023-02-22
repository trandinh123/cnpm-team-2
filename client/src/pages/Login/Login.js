import React from "react";
import Button from "react-bootstrap/Button";
import { SERVER_URL, CLIENT_URL } from "../../config";

export default function Login() {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Button
        variant="primary"
        onClick={() => {
          window.open(
            `${SERVER_URL}/auth/google?returnTo=${CLIENT_URL}/`,
            "_self"
          );
        }}
      >
        Login with Google
      </Button>
    </div>
  );
}
