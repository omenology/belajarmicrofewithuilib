import App from "./App.svelte";
import "./index.css";

const mount = (elemnt) => {
  return new App({
    target: elemnt,
  });
};

export default process.env.NODE_ENV == "development" ? mount(document.getElementById("ROOT_DEV_DASHBOARD")) : undefined;
export { mount };
