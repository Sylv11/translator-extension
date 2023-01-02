import { createRoot } from "react-dom/client";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import Translator from "@src/pages/content/components/Demo/Translator";

refreshOnUpdate("pages/content/components/Demo");

function init() {
  const root = document.createElement("div");
  root.id = "chrome-extension-boilerplate-react-vite-content-view-root";
  document.body.append(root);

  createRoot(root).render(<Translator />);
}

init();
