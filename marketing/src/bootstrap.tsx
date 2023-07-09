import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const mount = (container: HTMLElement = document.getElementById("ROOT_DEV_MARKETING")!) => {
  if (container) {
    const root = createRoot(container);

    root.render(<App />);
  }
};

if (process.env.NODE_ENV == "development") mount();

export { mount };
