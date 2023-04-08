import React from "react";
import { useRouteError } from "react-router-dom";

export default function () {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ textAlign: "center", width: "100vh" }}>
      <h1>Error</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
