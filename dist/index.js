import React from "react";
import ReactDOM from "react-dom/client";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={3} size={24} animation="scale" />
  </React.StrictMode>
);
