import "./i18n/i18n.ts";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
